import { useEffect, useState} from 'react';
import { fetchStores } from '../components/Api/fetchStores';

type StoreDataItem = {
  storeID: string;
  images: {
    icon: string;
  };
};


const useStores = () => {
  const [storeData, setStoreData] = useState<StoreDataItem[]>([]);

  useEffect(() => {
    const getStores = async () => { 
      try {
        const response = await fetchStores();
        if (response) {
          setStoreData(response);
        } else {
          console.warn('Failed to Fetch store');
        }
      } catch (error) {
        console.warn('Failed to fetch data', error);
      }
    };
    getStores();
  }, []);
  return { storeData };
};
export default useStores;
