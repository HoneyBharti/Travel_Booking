import axios from 'axios';

const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;
const RAPID_API_HOST = import.meta.env.VITE_RAPID_API_HOST;

export const fetchPNRStatus = async (pnrNumber) => {
  try {
    console.log("fetching pnr status");
    
    const response = await axios.get(
      `https://${RAPID_API_HOST}/getPNRStatus/${pnrNumber}`,
      {
        headers: {
          'x-rapidapi-host': RAPID_API_HOST,
          'x-rapidapi-key': RAPID_API_KEY
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching PNR status:', error);
    throw error;
  }
};