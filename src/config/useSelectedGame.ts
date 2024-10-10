import { useRef, useState, useCallback } from 'react';
import { loadGameData } from '../components/Api/loadGameData'; 


type GameData = {
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
type DealsData = {
  info: GameData;
  deals: Deals[];
  cheapestPriceEver: CheapestPriceEver;
};


const useSelectedGame = () => {
  const [gameData, setGameData] = useState<DealsData>();
  const gameIDRef = useRef('');
  
  const fetchGameDataByGameID = useCallback(async (ID: string) => {
    const encodedID = encodeURIComponent(ID);
    const gameID = gameIDRef.current = encodedID;
    try {
      const data = await loadGameData({ gameID: gameID});
      setGameData(data);
    } catch (error) {
      console.error("ERROR:", error);
    }
  }, []);
  return { gameData, fetchGameDataByGameID };
};

export default useSelectedGame;
