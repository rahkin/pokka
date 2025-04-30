interface RSSItem {
  title: string
  link: string
  description: string
  pubDate: string
}

// CryptoCompare API configuration
const CRYPTOCOMPARE_API_KEY = import.meta.env.VITE_CRYPTOCOMPARE_API_KEY
const CRYPTOCOMPARE_API_URL = 'https://min-api.cryptocompare.com/data/v2/news/'

// Keywords to filter relevant news
const KEYWORDS = [
  'Binance',
  'BNB Chain',
  'PancakeSwap',
  'DeFi on BNB',
  'Web3 gaming on BNB',
  'AIAI Society',
  'blockchain',
  'cryptocurrency',
  'crypto',
  'DeFi',
  'Web3'
]

const fetchWithRetry = async (url: string, retries = 3): Promise<Response> => {
  let lastError: Error | null = null;

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Apikey ${CRYPTOCOMPARE_API_KEY}`,
          'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1'
        },
        mode: 'cors',
        cache: 'no-cache'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, statusText: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      lastError = error as Error;
      console.warn(`Attempt ${i + 1} failed:`, error);
      if (i < retries - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
  }
  
  throw new Error(`Max retries reached. Last error: ${lastError?.message}`);
};

// Helper function to truncate text
const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

// Helper function to format date
const formatDate = (timestamp: number): string => {
  try {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'N/A';
  }
};

// Fallback news data
const getFallbackNews = (): RSSItem[] => {
  const currentDate = new Date();
  return [
    {
      title: "Binance Launches New Web3 Gaming Platform",
      link: "https://example.com",
      description: "Binance announces new gaming platform on BNB Chain",
      pubDate: currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    {
      title: "PancakeSwap V3 Goes Live on BNB Chain",
      link: "https://example.com",
      description: "Major upgrade brings new features to DeFi on BNB",
      pubDate: new Date(currentDate.getTime() - 86400000).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    {
      title: "AIAI Society Partners with Binance",
      link: "https://example.com",
      description: "New partnership aims to boost Web3 gaming on BNB",
      pubDate: new Date(currentDate.getTime() - 172800000).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }
  ];
};

export const fetchRSSFeedFromNewsAPI = async (): Promise<RSSItem[]> => {
  try {
    if (!CRYPTOCOMPARE_API_KEY) {
      console.warn('CryptoCompare API key is missing, using fallback news');
      return getFallbackNews();
    }

    // Construct the API URL with parameters
    const apiUrl = new URL(CRYPTOCOMPARE_API_URL);
    apiUrl.searchParams.append('lang', 'EN');
    apiUrl.searchParams.append('api_key', CRYPTOCOMPARE_API_KEY);

    console.log('Fetching news from:', apiUrl.toString());

    // Fetch news from CryptoCompare API
    const response = await fetchWithRetry(apiUrl.toString());
    const data = await response.json();
    
    if (!data.Data || !Array.isArray(data.Data) || data.Data.length === 0) {
      console.error('Invalid or empty response from CryptoCompare:', data);
      return getFallbackNews();
    }

    console.log('Received articles:', data.Data.length);

    // Transform the articles into our RSSItem format
    const allItems: RSSItem[] = data.Data
      .filter((article: any) => {
        if (!article.title || !article.body) {
          console.warn('Invalid article format:', article);
          return false;
        }
        const searchText = `${article.title} ${article.body}`.toLowerCase();
        return KEYWORDS.some(keyword => 
          searchText.includes(keyword.toLowerCase())
        );
      })
      .map((article: any) => ({
        title: article.title,
        link: article.url,
        description: truncateText(article.body, 200), // Truncate description to 200 characters
        pubDate: formatDate(article.published_on)
      }));

    console.log('Filtered articles:', allItems.length);

    if (allItems.length === 0) {
      console.warn('No articles found after filtering, using fallback news');
      return getFallbackNews();
    }

    // Sort by date, newest first
    return allItems.sort((a, b) => 
      new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    );
  } catch (error) {
    console.error('Error fetching news:', error);
    return getFallbackNews();
  }
}; 