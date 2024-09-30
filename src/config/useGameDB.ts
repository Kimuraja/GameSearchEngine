import { useEffect, useState } from 'react';
import { fetchGames } from '../components/Api/FetchGames';

type T = {
  internalName: string;
  title: string;
  metacriticLink: string;
  dealID: string;
  storeID: string;
  gameID: string;
  salePrice: string;
  normalPrice: string;
  isOnSale: string;
  savings: string;
  metacriticScore: string;
  steamRatingText: string;
  steamRatingPercent: string;
  steamRatingCount: string;
  steamAppID: string;
  releaseDate: number;
  lastChange: number;
  dealRating: string;
  thumb: string;
};

const useGameDB = () => {
  const [deals, setDeals] = useState<T[]>([]);
  const [searchContentData, setSearchContentData] = useState<string>('');
  
  useEffect(() => {
    const getDeals = async () => { 
      try {
        const response = await fetchGames();
        if (response && response.data) {
          setDeals(response.data)
        } else {
          console.error('Response Error')
        } 
      } catch (error) {
        console.error('Failed to fetch data', error)
      }
    }
    getDeals();
  }, []);

  const ContentData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchContentData(event.target.value);
  };

  const filterGame = deals.filter((deal) =>
    deal.title.toLowerCase().includes(searchContentData.toLowerCase())
  );

  const BaseContent = filterGame.map((deal) => ({
    title: deal.title,
    salePrice: deal.salePrice,
    normalPrice: deal.normalPrice,
    savings: deal.savings,
    name: deal.internalName,
    dealID: deal.gameID,
  }))
  return {filterGame, ContentData, searchContentData, BaseContent}
}
export default useGameDB