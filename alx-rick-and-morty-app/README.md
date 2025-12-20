# Rick and Morty Episodes App

A full-featured Next.js application that displays Rick and Morty episodes using GraphQL queries.

## Features

- Episode listing with pagination
- Apollo Client for data fetching
- TypeScript interfaces for type safety
- Responsive design with Tailwind CSS
- Custom Episode Card component

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `components/common/EpisodeCard.tsx` - Reusable episode card component
- `interfaces/index.ts` - TypeScript type definitions
- `pages/index.tsx` - Main page with episode listing
- `graphql/apolloClient.ts` - Apollo Client configuration
- `graphql/queries.ts` - GraphQL query definitions

## API

This project uses the Rick and Morty GraphQL API:
- Endpoint: `https://rickandmortyapi.com/graphql`

## Components

### EpisodeCard
Displays individual episode information including:
- Episode name
- Air date
- Episode code (e.g., S01E01)

---

## Error Handling & Monitoring ✅

This project includes an `ErrorBoundary` component that catches runtime errors in the React tree and displays a friendly fallback UI.

Files added:
- `components/ErrorBoundary.tsx` — class component that implements React error boundary behavior and reports errors to Sentry if configured.
- `components/ErrorProneComponent.tsx` — simple component that throws an error to test the boundary.

How to test locally:
1. Start the dev server: `npm run dev`.
2. Open `http://localhost:3000` and click the **Trigger Error** button near the top of the homepage to see the ErrorBoundary fallback.

Sentry setup (optional, recommended for monitoring):
1. Install packages: `npm install @sentry/react @sentry/nextjs` (packages are already added to `package.json`).
2. Provide a DSN:
   - Client-side: set `NEXT_PUBLIC_SENTRY_DSN`
   - Server-side: set `SENTRY_DSN`
3. The repository contains `sentry.client.config.ts` and `sentry.server.config.ts` for basic initialization. Ensure your DSNs are set and restart the dev server.

Note: If Sentry is not installed or a DSN is not configured, the ErrorBoundary will still work and fall back to logging the error to the console.