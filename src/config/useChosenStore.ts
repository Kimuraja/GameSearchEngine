import { useRef, useState, useCallback } from 'react';
import { fetchGameDeals } from '../components/Api/FetchGameDeals'; 

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
  price: string,
  date: number,
}
type GameData = {
  info: GameInfo;
  deals: Deals[];
  cheapestPriceEver: CheapestPriceEver
};

const useChosenStore = () => {
  const [gameData, setGameData] = useState<GameData>();
  const chosenStoreRef = useRef('');

  const getID = useCallback(async (ID: string) => {
    const encodedID = encodeURIComponent(ID);
    chosenStoreRef.current = encodedID;

    try {
      const data = await fetchGameDeals({ gameID: chosenStoreRef.current });
      setGameData(data);
    } catch (error) {
      console.error("ERROR:", error);
    }
  }, []);

  return { gameData, getID };
};

export default useChosenStore;
