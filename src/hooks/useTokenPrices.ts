import { useState, useEffect } from 'react';

interface TokenPrices {
  pokka: {
    price: number;
    priceChange24h: number;
    marketCap: number;
  };
  bnb: {
    price: number;
    priceChange24h: number;
    marketCap: number;
  };
  btc: {
    price: number;
    priceChange24h: number;
    marketCap: number;
  };
}

const POKKA_CONTRACT = '0xb82f36fb31bf0be873879C031de4150d40AfDda9';
const WBNB_CONTRACT = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'; // Wrapped BNB contract
const BTC_CONTRACT = '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c'; // BTCB on BSC

export const useTokenPrices = () => {
  const [prices, setPrices] = useState<TokenPrices>({
    pokka: { price: 0, priceChange24h: 0, marketCap: 0 },
    bnb: { price: 0, priceChange24h: 0, marketCap: 0 },
    btc: { price: 0, priceChange24h: 0, marketCap: 0 }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch all token prices from DexScreener
        const [pokkaResponse, bnbResponse, btcResponse] = await Promise.all([
          fetch(`https://api.dexscreener.com/latest/dex/tokens/${POKKA_CONTRACT}`),
          fetch(`https://api.dexscreener.com/latest/dex/tokens/${WBNB_CONTRACT}`),
          fetch(`https://api.dexscreener.com/latest/dex/tokens/${BTC_CONTRACT}`)
        ]);

        const [pokkaData, bnbData, btcData] = await Promise.all([
          pokkaResponse.json(),
          bnbResponse.json(),
          btcResponse.json()
        ]);

        // Get the main pair data (usually the one with highest liquidity)
        const pokkaPair = pokkaData.pairs?.[0];
        const bnbPair = bnbData.pairs?.[0];
        const btcPair = btcData.pairs?.[0];
        
        if (!pokkaPair || !bnbPair || !btcPair) {
          throw new Error('No price data available');
        }

        setPrices({
          pokka: {
            price: parseFloat(pokkaPair.priceUsd),
            priceChange24h: parseFloat(pokkaPair.priceChange24h) || 0,
            marketCap: parseFloat(pokkaPair.fdv) || 0
          },
          bnb: {
            price: parseFloat(bnbPair.priceUsd),
            priceChange24h: parseFloat(bnbPair.priceChange24h) || 0,
            marketCap: parseFloat(bnbPair.fdv) || 0
          },
          btc: {
            price: parseFloat(btcPair.priceUsd),
            priceChange24h: parseFloat(btcPair.priceChange24h) || 0,
            marketCap: parseFloat(btcPair.fdv) || 0
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