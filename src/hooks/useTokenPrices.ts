import { useState, useEffect } from 'react';

interface TokenPrices {
  pokka: {
    price: number;
    priceChange24h: number;
  };
  bnb: {
    price: number;
    priceChange24h: number;
  };
}

const POKKA_CONTRACT = '0xb82f36fb31bf0be873879c031de4150d40afdda9';
const WBNB_CONTRACT = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'; // Wrapped BNB contract

export const useTokenPrices = () => {
  const [prices, setPrices] = useState<TokenPrices>({
    pokka: { price: 0, priceChange24h: 0 },
    bnb: { price: 0, priceChange24h: 0 }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch both POKKA and BNB prices from DexScreener
        const [pokkaResponse, bnbResponse] = await Promise.all([
          fetch(`https://api.dexscreener.com/latest/dex/tokens/${POKKA_CONTRACT}`),
          fetch(`https://api.dexscreener.com/latest/dex/tokens/${WBNB_CONTRACT}`)
        ]);

        const [pokkaData, bnbData] = await Promise.all([
          pokkaResponse.json(),
          bnbResponse.json()
        ]);

        // Get the main pair data (usually the one with highest liquidity)
        const pokkaPair = pokkaData.pairs?.[0];
        const bnbPair = bnbData.pairs?.[0];
        
        if (!pokkaPair || !bnbPair) {
          throw new Error('No price data available');
        }

        setPrices({
          pokka: {
            price: parseFloat(pokkaPair.priceUsd),
            priceChange24h: parseFloat(pokkaPair.priceChange24h) || 0
          },
          bnb: {
            price: parseFloat(bnbPair.priceUsd),
            priceChange24h: parseFloat(bnbPair.priceChange24h) || 0
          }
        });
      } catch (err) {
        console.error('Error fetching token prices:', err);
        setError('Failed to fetch token prices');
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return { prices, loading, error };
}; 