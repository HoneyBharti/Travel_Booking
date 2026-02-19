import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export const fetchPNRStatus = async (pnrNumber) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/pnr/${pnrNumber}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching PNR status:', error);
    throw error;
  }
};