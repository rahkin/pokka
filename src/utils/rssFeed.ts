import { parseString } from 'xml2js'

interface RSSItem {
  title: string
  link: string
  description: string
  pubDate: string
}

interface NewsAPIResponse {
  articles: Array<{
    title: string
    url: string
    description: string
    publishedAt: string
  }>
}

// Using NewsAPI for reliable news fetching
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY
const NEWS_API_URL = 'https://newsapi.org/v2/everything'

// Updated keywords to focus on blockchain and crypto
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

// List of trusted crypto news sources
const TRUSTED_SOURCES = [
  'coindesk.com',
  'cointelegraph.com',
  'theblock.co',
  'decrypt.co',
  'cryptonews.com',
  'binance.com'
]

const cleanHtml = (html: string): string => {
  return html
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim()
}

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

export const fetchRSSFeed = async (): Promise<RSSItem[]> => {
  try {
    if (!NEWS_API_KEY) {
      throw new Error('NewsAPI key is not configured')
    }

    // Create a query string from our keywords
    const query = KEYWORDS.join(' OR ')
    
    // Create a domains string from trusted sources
    const domains = TRUSTED_SOURCES.join(',')
    
    // Fetch news from NewsAPI with specific parameters
    const response = await fetchWithRetry(
      `${NEWS_API_URL}?` +
      `q=${encodeURIComponent(query)}` +
      `&domains=${encodeURIComponent(domains)}` +
      `&sortBy=publishedAt` +
      `&language=en` +
      `&pageSize=20` +
      `&apiKey=${NEWS_API_KEY}`
    )
    
    const data: NewsAPIResponse = await response.json()
    
    if (!data.articles || data.articles.length === 0) {
      throw new Error('No articles found')
    }

    // Transform the articles into our RSSItem format
    const allItems: RSSItem[] = data.articles.map(article => ({
      title: article.title,
      link: article.url,
      description: article.description,
      pubDate: article.publishedAt
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
    ]
  }
} 