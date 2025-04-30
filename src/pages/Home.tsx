import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GameTiles from '../components/GameTiles'
import { RefreshCw, TrendingUp, AlertCircle } from 'lucide-react'
import { fetchRSSFeedFromNewsAPI } from '../utils/rssFeed'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Hero = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--pokka-white);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: var(--pokka-cyan);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`

const Note = styled.p`
  color: var(--pokka-orange) !important;
  font-style: italic;
  margin-top: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const NewsSection = styled.section`
  margin: 4rem 0;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--pokka-cyan);
  border-radius: 16px;

  @media (max-width: 768px) {
    margin: 2rem 0;
    padding: 1rem;
  }

  h2 {
    color: var(--pokka-cyan);
    font-size: 2rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: 'One Little Font', sans-serif;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const NewsCard = styled.article`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 240, 255, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
  font-family: 'One Little Font', sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin-bottom: 1rem;
    font-family: 'One Little Font', sans-serif;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    a {
      color: var(--pokka-cyan);
      text-decoration: none;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  p {
    color: var(--pokka-white);
    margin-bottom: 1rem;
    font-family: 'One Little Font', sans-serif;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
  }

  time {
    color: var(--pokka-orange);
    font-size: 0.9rem;
    font-family: 'One Little Font', sans-serif;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`

const FeaturedGames = styled.section`
  margin: 4rem 0;

  h2 {
    color: var(--pokka-cyan);
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    font-family: 'One Little Font', sans-serif;
  }
`

const CryptoDashboard = styled.section`
  margin: 4rem 0;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--pokka-cyan);
  border-radius: 16px;

  h2 {
    color: var(--pokka-cyan);
    font-size: 2rem;
    margin-bottom: 2rem;
    font-family: 'One Little Font', sans-serif;
  }
`

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

const DashboardCard = styled.div`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 240, 255, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  font-family: 'One Little Font', sans-serif;

  h3 {
    color: var(--pokka-cyan);
    margin-bottom: 1rem;
    font-family: 'One Little Font', sans-serif;
  }

  .value {
    font-size: 1.5rem;
    color: var(--pokka-white);
    margin-bottom: 0.5rem;
    font-family: 'One Little Font', sans-serif;
  }

  .trend {
    color: var(--pokka-orange);
    font-size: 0.9rem;
    font-family: 'One Little Font', sans-serif;
  }
`

const CTABanner = styled.section`
  margin: 4rem 0;
  padding: 4rem;
  background: linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(255, 107, 53, 0.1));
  border: 1px solid var(--pokka-cyan);
  border-radius: 16px;
  text-align: center;

  h2 {
    color: var(--pokka-cyan);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: 'One Little Font', sans-serif;
  }

  p {
    color: var(--pokka-white);
    font-size: 1.2rem;
    margin-bottom: 2rem;
    font-family: 'One Little Font', sans-serif;
  }
`

const Footer = styled.footer`
  margin-top: 4rem;
  padding: 2rem;
  text-align: center;
  color: var(--pokka-white);
  opacity: 0.7;
  font-family: 'One Little Font', sans-serif;
`

const RefreshButton = styled.button`
  background: none;
  border: none;
  color: var(--pokka-cyan);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: transform 0.3s ease;
  font-family: 'One Little Font', sans-serif;

  &:hover {
    transform: rotate(180deg);
  }
`

const Home: React.FC = () => {
  const [news, setNews] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [visibleCount, setVisibleCount] = useState(6)

  const fetchNews = async () => {
    setLoading(true)
    try {
      const articles = await fetchRSSFeedFromNewsAPI()
      setNews(articles)
      setVisibleCount(6) // Reset visible count on refresh
    } catch (error) {
      console.error('Error fetching news:', error)
      // Fallback to dummy news if RSS fetch fails
      setNews([
        {
          title: "Binance Launches New Web3 Gaming Platform",
          link: "https://example.com",
          description: "Binance announces new gaming platform on BNB Chain",
          pubDate: "2024-03-15"
        },
        {
          title: "PancakeSwap V3 Goes Live on BNB Chain",
          link: "https://example.com",
          description: "Major upgrade brings new features to DeFi on BNB",
          pubDate: "2024-03-14"
        },
        {
          title: "AIAI Society Partners with Binance",
          link: "https://example.com",
          description: "New partnership aims to boost Web3 gaming on BNB",
          pubDate: "2024-03-13"
        }
      ])
      setVisibleCount(6)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6)
  }

  return (
    <Container>
      <Hero>
        <h1>Welcome to Pokka's Arcade Hub</h1>
        <p>Play exciting games and earn rewards!</p>
        <Note>
          Note: Not all games are optimized for mobile devices. For the best
          experience, please play on desktop.
        </Note>
      </Hero>

      <NewsSection>
        <h2>
          ☕ Morning Coffee News
          <RefreshButton onClick={fetchNews} disabled={loading}>
            <RefreshCw size={20} />
          </RefreshButton>
        </h2>
        <NewsGrid>
          {loading ? (
            <p>Loading news...</p>
          ) : (
            news.slice(0, visibleCount).map((article, index) => (
              <NewsCard key={index}>
                <h3>
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </h3>
                <p>{article.description}</p>
                <time>{new Date(article.pubDate).toLocaleDateString()}</time>
              </NewsCard>
            ))
          )}
        </NewsGrid>
        {!loading && visibleCount < news.length && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              onClick={handleShowMore}
              style={{
                background: 'var(--pokka-cyan)',
                color: 'black',
                border: 'none',
                borderRadius: '8px',
                padding: '0.75rem 2rem',
                fontSize: '1.1rem',
                fontFamily: "'One Little Font', sans-serif",
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            >
              Show More
            </button>
          </div>
        )}
      </NewsSection>

      <CryptoDashboard>
        <h2>📈 Crypto Dashboard</h2>
        <DashboardGrid>
          <DashboardCard>
            <h3>$AIAI</h3>
            <div className="value">$0.000123</div>
            <div className="trend">
              <TrendingUp size={16} /> +2.5% (24h)
            </div>
          </DashboardCard>
          <DashboardCard>
            <h3>$POKKA</h3>
            <div className="value">$0.000456</div>
            <div className="trend">
              <TrendingUp size={16} /> +1.8% (24h)
            </div>
          </DashboardCard>
          <DashboardCard>
            <h3>BNB Gas</h3>
            <div className="value">5 Gwei</div>
            <div className="trend">
              <AlertCircle size={16} /> Low
            </div>
          </DashboardCard>
        </DashboardGrid>
      </CryptoDashboard>

      <CTABanner>
        <h2>🚀 Ready to Train Your Own AI Twin?</h2>
        <p>Join the Digital Nation with AIAI Society.</p>
        <a
          href="https://aiai.now/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: 'var(--pokka-cyan)',
            color: 'black',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.4)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Create My Twin Now
        </a>
      </CTABanner>

      <FeaturedGames>
        <h2>Featured Games</h2>
        <GameTiles />
      </FeaturedGames>

      <Footer>
        Made with ❤️ by Pokka & AIAI Society · Follow @Pokka_AIAI
      </Footer>
    </Container>
  )
}

export default Home 