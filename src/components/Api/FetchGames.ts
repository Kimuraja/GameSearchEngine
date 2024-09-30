import axios from 'axios';

export async function fetchGames() {
  try {
    const response = await axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=60');
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.warn('GAME-DATA ERROR:', error.response ? error.response.data : error.message);
    } else {
      console.warn('UNKNOWN ERROR:', error);
    }
  }
}
