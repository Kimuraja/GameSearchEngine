import axios from 'axios';

export async function fetchGameList() {
  try {
    const response = await axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1&lowerPrice=0');
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.warn('GAME-DATA ERROR:', error.response ? error.response.data : error.message);
    } else {
      console.warn('UNKNOWN ERROR:', error);
    }
  }
}
