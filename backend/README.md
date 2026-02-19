# Backend Setup

## Installation

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will run on http://localhost:5000

## Environment Variables

Make sure `.env` file exists in the backend directory with:
- PORT=5000
- RAPID_API_KEY=your_rapidapi_key
- RAPID_API_HOST=irctc-indian-railway-pnr-status.p.rapidapi.com

## API Endpoint

GET `/api/pnr/:pnrNumber` - Fetch PNR status for a given PNR number
