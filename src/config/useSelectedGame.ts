import { useRef, useState, useCallback } from 'react';
import { loadGameOffers } from '../components/Api/loadGameOffers'; 

type GameInfo = {
  title: string;
  steamAppID: string;
  thumb: string;
};
type Deals = {
  dealID: string;
  storeID: string;
  price: string;
  retailPrice: string;
};
type CheapestPriceEver = {
  price: string;
  date: number;
};
type GameData = {
  info: GameInfo;
  deals: Deals[];
  cheapestPriceEver: CheapestPriceEver;
};

const useSelectedGame = () => {
  const [gameData, setGameData] = useState<GameData>();
  const gameIDRef = useRef('');
  
  const fetchDealsByID = useCallback(async (ID: string) => {
    const encodedID = encodeURIComponent(ID);
    const gameID = gameIDRef.current = encodedID;
    try {
      const data = await loadGameOffers({ gameID: gameID});
      setGameData(data);
    } catch (error) {
      console.error("ERROR:", error);
    }
  }, []);
  return { gameData, fetchDealsByID };
};

export default useSelectedGame;
