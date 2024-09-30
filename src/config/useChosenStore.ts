import { useRef, useState, useCallback } from 'react';
import { fetchGameDeals } from '../components/Api/FetchGameDeals'; 

type GameInfo = {
  storeID: string;
  gameID: string;
  name: string;
  steamAppID: string;
  salePrice: string;
  retailPrice: string;
  steamRatingText: string;
  steamRatingPercent: string;
  steamRatingCount: string;
  metacriticScore: string;
  metacriticLink: string;
  releaseDate: number;
  publisher: string;
  steamworks: string;
  thumb: string;
};

type CheaperStore = {
  dealID: string;
  storeID: string;
  salePrice: string;
  retailPrice: string;
};

type CheapestPrice = {
  price: string;
  date: number;
};

type GameData = {
  gameInfo: GameInfo;
  cheaperStores: CheaperStore[];
  cheapestPrice: CheapestPrice;
};

const useChosenStore = () => {
  const [gameData, setGameData] = useState<GameData>();
  const chosenStoreRef = useRef('');

  const getID = useCallback(async (ID: string) => {
    const encodedID = encodeURIComponent(ID);
    chosenStoreRef.current = encodedID;

    try {
      const data = await fetchGameDeals({ dealID: chosenStoreRef.current });
      setGameData(data);
    } catch (error) {
      console.error("ERROR:", error);
    }
  }, []);

  return { gameData, getID };
};

export default useChosenStore;
