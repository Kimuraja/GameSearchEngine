import axios from 'axios'

export async function fetchStore() {
  try {
    const response = await axios.get('https://www.cheapshark.com/api/1.0/stores');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.warn('STORE ERROR:', error.response ? error.response.data : error.message);
    } else {
      console.warn('UNKNOWN ERROR:', error);
    }
}}