# MovieStore

A React + Vite movie discovery app that lets you:

- browse popular movies from TMDB,
- search movies by title via OMDb,
- view detailed movie info,
- save/remove favourites in local storage.

## Tech Stack

- React 19
- React Router
- Vite
- CSS modules/files in `src/styles`

## Features

- Home page with "Popular Now" movies
- Search page with live query updates on Enter
- Movie details page (`/details/:id`)
- Favourites page (`/favourites`)
- Favourites persisted in `localStorage`

## Prerequisites

- npm
- OMDb API key
- TMDB API key

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_OMDBKEY=your_omdb_api_key
VITE_TMDBAPI=your_tmdb_api_key
```

Notes:

- `VITE_OMDBKEY` is used for OMDb requests.
- `VITE_TMDBAPI` are used for popular movies on the home page.

## Getting Started

```bash
npm install
npm run dev
```


## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
  components/
    Home.jsx
    SearchResults.jsx
    MovieDetails.jsx
    Favourites.jsx
  styles/
  App.jsx
  main.jsx
```

## Notes

- Favourites are stored in browser local storage under the key `favourites`.
- Some fallback poster imports currently use an absolute local file path (`C:\Users\brolyne\Desktop\programs\img.png`). For portability, move that image into this repo (for example `src/assets/`) and update imports.
