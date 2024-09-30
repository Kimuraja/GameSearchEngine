import axios from "axios";

type T = {
  dealID: string;
}

export async function fetchGameDeals({ dealID }: T) {
  try {
    const response = await axios.get(`https://www.cheapshark.com/api/1.0/deals?id=${dealID}`);
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.warn('STORE ERROR:', error.response ? error.response.data : error.message);
    } else {
      console.warn('UNKNOWN ERROR:', error);
    }
  }
}
