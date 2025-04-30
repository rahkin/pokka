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
const BNB_ID = 'binancecoin';

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

        // Fetch BNB price from CoinGecko
        const bnbResponse = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${BNB_ID}&vs_currencies=usd&include_24hr_change=true`
        );
        const bnbData = await bnbResponse.json();

        // Fetch POKKA price from PancakeSwap
        const pokkaResponse = await fetch(
          `https://api.pancakeswap.info/api/v2/tokens/${POKKA_CONTRACT}`
        );
        const pokkaData = await pokkaResponse.json();

        setPrices({
          bnb: {
            price: bnbData[BNB_ID].usd,
            priceChange24h: bnbData[BNB_ID].usd_24h_change || 0
          },
          pokka: {
            price: parseFloat(pokkaData.data.price),
            priceChange24h: parseFloat(pokkaData.data.price_change_24h) || 0
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