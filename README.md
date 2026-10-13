# Movie App

A movie-discovery web application built with React and TypeScript, using The Movie Database (TMDB) API to display popular movies. This is an ongoing project implemented and built to serve the course Front End Frameworks @ EPITA with professor Martin Pedraza. The project focuses on React, TypeScript, API integration, and application structure.

The project explores modern React development, API integration, reusable components, client-side routing, and interactive user interfaces.

## Features

- **Movie discovery** — Fetch and display popular movies from the TMDB API.
- **Movie details** — Open a modal to view additional information about a selected movie.
- **Search and filtering** — Filter the displayed movies by title.
- **Reusable components** — Separate components for movie cards, movie lists, search, and movie details.
- **Client-side routing** — Navigate between the Home and About pages, with a custom not-found page.
- **Loading and error states** — Provide feedback while movie data is loading or when a request fails.
- **TypeScript** — Use typed movie data and component props to improve code clarity and reliability.

## Tech Stack

- **React** — Component-based user interface development
- **TypeScript** — Static typing
- **Vite** — Development server and build tooling
- **React Router** — Client-side navigation
- **TMDB API** — Movie data and poster images
- **Vitest and Testing Library** — Automated testing

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- A TMDB API Read Access Token

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/namkhanh-le/Front-end-Frameworks.git
   cd Front-end-Frameworks
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add TMDB API token:

   ```env
   VITE_TMDB_API_KEY=your_tmdb_read_access_token
   ```

   Obtain an API token from the TMDB website, you must make an account and register for one

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open local URL printed in terminal.

**Never commit `.env` file or publish your API token. The project is configured to ignore local environment files, do not edit the gitignore.**

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build the application |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript checks |
| `npm run test:run` | Run the test suite |
| `npm run test:m1` | Run Milestone 1 tests |
| `npm run test:m2` | Run Milestone 2 tests |
| `npm run test:m3` | Run Milestone 3 tests |

## Project Structure

```text
src/
├── components/   # Reusable UI components
├── data/         # Movie-related data and helpers
├── hooks/        # Custom React hooks for data fetching
├── pages/        # Home, About, and not-found pages
├── test/         # Automated tests
├── types/        # TypeScript type definitions
├── App.tsx       # Application layout and routing
└── main.tsx      # Application entry point
```

## Data Attribution

Movie information and images are provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).

This project uses the TMDB API but is not endorsed or certified by TMDB.

## Status

An ongoing educational project developed as part of front-end development coursework, with a focus on React, TypeScript, API integration, and application structure.
