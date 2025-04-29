interface RSSItem {
  title: string
  link: string
  description: string
  pubDate: string
}

// List of trusted crypto news sources with their RSS feeds
const TRUSTED_SOURCES = [
  {
    name: 'CoinDesk',
    url: 'https://www.coindesk.com/arc/outboundfeeds/rss/',
    domain: 'coindesk.com'
  },
  {
    name: 'CoinTelegraph',
    url: 'https://cointelegraph.com/rss',
    domain: 'cointelegraph.com'
  },
  {
    name: 'The Block',
    url: 'https://www.theblock.co/rss.xml',
    domain: 'theblock.co'
  },
  {
    name: 'Decrypt',
    url: 'https://decrypt.co/feed',
    domain: 'decrypt.co'
  },
  {
    name: 'CryptoNews',
    url: 'https://cryptonews.com/feed/',
    domain: 'cryptonews.com'
  },
  {
    name: 'Binance',
    url: 'https://www.binance.com/bapi/composite/v1/public/cms/article/catalog/list/query?catalogId=48&pageNo=1&pageSize=20',
    domain: 'binance.com'
  }
]

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
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return response
    } catch (error) {
      if (i === retries - 1) throw error
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)))
    }
  }
  throw new Error('Max retries reached')
}

export const fetchRSSFeed = async (url: string): Promise<RSSItem[]> => {
  try {
    const response = await fetchWithRetry(url);
    const text = await response.text();
    
    // Parse the XML manually since we're only interested in specific tags
    const items: RSSItem[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(text)) !== null) {
      const itemContent = match[1];
      
      // Extract individual fields
      const title = itemContent.match(/<title>(.*?)<\/title>/)?.[1] || '';
      const link = itemContent.match(/<link>(.*?)<\/link>/)?.[1] || '';
      const pubDate = itemContent.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || '';
      const description = itemContent.match(/<description>(.*?)<\/description>/)?.[1] || '';

      items.push({
        title: decodeHTMLEntities(title),
        link,
        pubDate,
        description: decodeHTMLEntities(description)
      });
    }

    return items;
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return [];
  }
};

const decodeHTMLEntities = (text: string): string => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};

const isRelevantArticle = (item: RSSItem): boolean => {
  const searchText = `${item.title} ${item.description}`.toLowerCase();
  return KEYWORDS.some(keyword => 
    searchText.includes(keyword.toLowerCase())
  );
};

export const fetchRSSFeedFromNewsAPI = async (): Promise<RSSItem[]> => {
  try {
    // Fetch from all sources in parallel
    const allPromises = TRUSTED_SOURCES.map(source => 
      source.url.endsWith('.json') 
        ? fetchWithRetry(source.url).then(res => res.json())
        : fetchRSSFeed(source.url)
    );

    const results = await Promise.allSettled(allPromises);
    
    // Combine all successful results
    const allItems: RSSItem[] = results
      .filter((result): result is PromiseFulfilledResult<RSSItem[]> => 
        result.status === 'fulfilled'
      )
      .flatMap(result => result.value)
      .filter(isRelevantArticle);

    // Sort by date, newest first
    return allItems.sort((a, b) => 
      new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    );
  } catch (error) {
    console.error('Error fetching news:', error);
    // Return fallback news in case of error
    return [
      {
        title: "Binance Launches New Web3 Gaming Platform",
        link: "https://example.com",
        description: "Binance announces new gaming platform on BNB Chain",
        pubDate: new Date().toISOString()
      },
      {
        title: "PancakeSwap V3 Goes Live on BNB Chain",
        link: "https://example.com",
        description: "Major upgrade brings new features to DeFi on BNB",
        pubDate: new Date().toISOString()
      },
      {
        title: "AIAI Society Partners with Binance",
        link: "https://example.com",
        description: "New partnership aims to boost Web3 gaming on BNB",
        pubDate: new Date().toISOString()
      }
    ];
  }
}; 