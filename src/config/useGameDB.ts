import { useEffect, useState } from 'react';
import { fetchGameList } from '../components/Api/fetchGameList';
import { fetchSearchInput } from '../components/Api/fetchSearchInput';
import { useDebounce } from './useDebounce';

type GameDeal = {
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
  const [deals, setDeals] = useState<GameDeal[]>([]);
  const [inputSearchDeal, setInputSearchDeal] = useState<GameDeal[]>([])
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

  useEffect(() => {
    const getSearch = async () => { 
      try {
        const response = await fetchSearchInput({gameID: searchQuery});
        if (response && response.data) {
          setInputSearchDeal(response.data)
        } else {
          console.error('Response Error')
        } 
      } catch (error) {
        console.error('Failed to fetch data', error)
      }
    }
    getSearch();
  }, [searchQuery]);
  
  const _handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const handleSearch = useDebounce(_handleSearch, 500)

  const searchInputGame = inputSearchDeal.filter((input) => 
    input.title && input.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filterGame = deals.filter((deal) =>
    deal.title && deal.title.toLowerCase().includes(searchQuery.toLowerCase())
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

  return {filterGame, handleSearch, searchQuery, gameDetails, inputSearchDeal, searchInputGame}
}
export default useGameDB