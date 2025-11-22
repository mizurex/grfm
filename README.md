# Dashboard

## Getting Started

Install dependencies:
```
npm install
```

Start development server:
```
npm run dev
```

Open http://localhost:3000

## Dashboard

Main dashboard page at `/` displays analytics cards:
(some cards)
- CreditScore card
- Revenue Card
- ExchangeCard...

Responsive layout for mobile, tablet, and desktop.

## /demo

Demo page at `/demo` implements an API request queue system.

Flow -

- Click "Send" button to add requests to queue
- Queue count displayed as red bubble on button
- Requests processed sequentially
- Status badge shows "Failed" on errors
- Response tooltip appears top-right
- Backend rate limit: 15 requests per minute

API endpoint `/api` accepts POST requests with JSON payload:
```json
{
  "message": "Send money request" // Default payload
}
```

Returns after 2 second delay:
```json
{
  "status": "ok",
  "echo": "Send money request"
}
```

