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
  cheapest: string,
  cheapestDealID: string,
  external: string,
};


const useGameDB = () => {
  const [gamesList, setGamesList] = useState<GameDeal[]>([]);
  const [inputSearchDeals, setInputSearchDeals] = useState<GameDeal[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('');
  

  useEffect(() => {
    const getDeals = async () => { 
      try {
        const response = await fetchGameList();
        if (response && response.data) {
          setGamesList(response.data)
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
        const response = await fetchSearchInput({gameTitle: searchQuery});
        if (response && response.data) {
          setInputSearchDeals(response.data)
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


  const filteredGamesList = gamesList.filter((game) =>
    game.title && game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const gameDetailsList = filteredGamesList.map((game) => ({
    title: game.title,
    salePrice: game.salePrice,
    normalPrice: game.normalPrice,
    savings: game.savings,
  }))

  
  return {filteredGamesList, handleSearch, searchQuery, gameDetailsList, inputSearchDeals}
}


export default useGameDB