import axios from "axios";

type GameID = {
  gameID: string;
}

export async function fetchGameDeals({ gameID }: GameID) {
  try {
    const response = await axios.get(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`);
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.warn('FETCH GAME DEALS ERROR:', error.response ? error.response.data : error.message);
    } else {
      console.warn('UNKNOWN ERROR:', error);
    }
  }
}
