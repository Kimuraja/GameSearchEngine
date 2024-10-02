import { useEffect, useState } from 'react';
import { fetchGameList } from '../components/Api/FetchGameList';

type GameList = {
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
  const [deals, setDeals] = useState<GameList[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  useEffect(() => {
    const getDeals = async () => { 
      try {
        const response = await fetchGameList();
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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filterGame = deals.filter((deal) =>
    deal.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const gameDetails = filterGame.map((deal) => ({
    title: deal.title,
    salePrice: deal.salePrice,
    normalPrice: deal.normalPrice,
    savings: deal.savings,
    name: deal.internalName,
    dealID: deal.gameID,
    score: deal.metacriticScore
  }))

  return {filterGame, handleSearchChange, searchQuery, gameDetails}
}
export default useGameDB