import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/pnr/:pnrNumber', async (req, res) => {
  const { pnrNumber } = req.params;

  if (!pnrNumber || pnrNumber.length !== 10) {
    return res.status(400).json({
      success: false,
      message: 'Invalid PNR number. Must be 10 digits.'
    });
  }

  try {
    const response = await axios.get(
      `https://${process.env.RAPID_API_HOST}/getPNRStatus/${pnrNumber}`,
      {
        headers: {
          'x-rapidapi-host': process.env.RAPID_API_HOST,
          'x-rapidapi-key': process.env.RAPID_API_KEY
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching PNR status:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch PNR status. Please try again.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
