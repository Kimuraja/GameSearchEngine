import axios from 'axios';

type gameTitle = {
  gameTitle: string
}

export async function fetchSearchInput({gameTitle}: gameTitle) {
  try {
    const response = await axios.get(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}`);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.warn('GAME-DATA ERROR:', error.response ? error.response.data : error.message);
    } else {
      console.warn('UNKNOWN ERROR:', error);
    }
  }
}
