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

// Helper function to truncate text
const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}

// Helper function to format date
const formatDate = (timestamp: number): string => {
  try {
    const date = new Date(timestamp * 1000) // Convert Unix timestamp to milliseconds
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  } catch (error) {
    console.error('Error formatting date:', error)
    return 'N/A'
  }
}

export const fetchRSSFeedFromNewsAPI = async (): Promise<RSSItem[]> => {
  try {
    if (!CRYPTOCOMPARE_API_KEY) {
      throw new Error('CryptoCompare API key is not configured')
    }

    // Fetch news from CryptoCompare API
    const response = await fetchWithRetry(
      `${CRYPTOCOMPARE_API_URL}?` +
      `lang=EN` +
      `&api_key=${CRYPTOCOMPARE_API_KEY}`
    )
    
    const data = await response.json()
    
    if (!data.Data || data.Data.length === 0) {
      throw new Error('No articles found')
    }

    // Transform the articles into our RSSItem format
    const allItems: RSSItem[] = data.Data
      .filter((article: any) => {
        const searchText = `${article.title} ${article.body}`.toLowerCase()
        return KEYWORDS.some(keyword => 
          searchText.includes(keyword.toLowerCase())
        )
      })
      .map((article: any) => ({
        title: article.title,
        link: article.url,
        description: truncateText(article.body, 200), // Truncate description to 200 characters
        pubDate: formatDate(article.published_on)
      }))

    // Sort by date, newest first
    return allItems.sort((a, b) => 
      new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    )
  } catch (error) {
    console.error('Error fetching news:', error)
    // Return fallback news in case of error
    return [
      {
        title: "Binance Launches New Web3 Gaming Platform",
        link: "https://example.com",
        description: "Binance announces new gaming platform on BNB Chain",
        pubDate: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      },
      {
        title: "PancakeSwap V3 Goes Live on BNB Chain",
        link: "https://example.com",
        description: "Major upgrade brings new features to DeFi on BNB",
        pubDate: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      },
      {
        title: "AIAI Society Partners with Binance",
        link: "https://example.com",
        description: "New partnership aims to boost Web3 gaming on BNB",
        pubDate: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      }
    ]
  }
} 