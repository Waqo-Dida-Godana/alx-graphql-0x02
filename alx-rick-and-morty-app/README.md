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