import axios from 'axios';

type GameID = {
  gameID: string
}

export async function fetchSearchInput({gameID}: GameID) {
  try {
    const response = await axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=1&title=${gameID}`);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.warn('GAME-DATA ERROR:', error.response ? error.response.data : error.message);
    } else {
      console.warn('UNKNOWN ERROR:', error);
    }
  }
}
