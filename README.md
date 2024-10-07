# Project Structure Documentation

This document provides an overview of the project's folder structure and a brief description of each directory and its contents.

## Overview

The project is structured to maintain a clear separation of concerns, making it easy to understand and maintain. Below is a breakdown of each directory and its purpose.

## Directory Structure
src/
│
├── api/               # API service files for communication with the backend
│   ├── musicApi.ts    # API calls related to music (e.g., fetch music, search)
│   ├── userApi.ts     # API calls related to user actions (e.g., login, signup)
│   └── favoritesApi.ts # API calls for managing favorite music
│
├── assets/            # Static assets (images, icons, audio files, etc.)
│   ├── images/        # Image files (logos, backgrounds)
│   └── audio/         # Audio files (samples, music tracks)
│
├── components/        # Reusable UI components (buttons, inputs, cards, etc.)
│   ├── Button/        # Generic button component
│   ├── Input/         # Generic input field component
│   └── Card/          # Card component for displaying music or artist information
│
├── config/            # Configuration files (e.g., API endpoints, theme settings)
│   ├── apiConfig.ts   # API endpoint URLs and configurations
│   └── theme.ts       # Theme settings (colors, typography)
│
├── features/          # Feature-specific components and logic
│   ├── music/         # Logic and components for music handling
│   │   ├── MusicList.tsx   # Component for displaying a list of music
│   │   ├── MusicPlayer.tsx  # Component for playing music
│   │   ├── musicSlice.ts    # Redux slice for music-related state
│   │   └── useMusic.ts      # Custom hook for music-related logic
│   ├── search/        # Logic and components for searching music
│   │   ├── SearchBar.tsx     # Search input component
│   │   ├── SearchResults.tsx  # Component for displaying search results
│   │   └── useSearch.ts       # Custom hook for handling search logic
│   ├── favorites/     # Logic and components for managing favorites
│   │   ├── FavoritesList.tsx  # Component for displaying favorite music
│   │   └── favoritesSlice.ts   # Redux slice for favorites-related state
│   ├── customization/  # Logic and components for customization
│   │   ├── CustomizationPanel.tsx # UI for customizing the app's appearance
│   │   └── useCustomization.ts    # Custom hook for managing custom settings
│   └── ai-assistant/  # Logic and components for the AI assistant
│       ├── AIChat.tsx      # Component for chat interface with the AI assistant
│       └── useAI.ts         # Custom hook for interacting with AI API
│
├── hooks/             # Custom hooks for reusable logic
│   ├── useAuth.ts      # Hook for authentication logic
│   └── useFetch.ts     # Hook for handling data fetching with loading and error states
│
├── layouts/           # Layout components (MainLayout, DashboardLayout, etc.)
│   ├── MainLayout.tsx  # Main layout for the app (header, footer, sidebar)
│   └── AuthLayout.tsx  # Layout for authentication pages (login, signup)
│
├── pages/             # Page components (e.g., Home, Search, Favorites, Profile)
│   ├── Home.tsx       # Homepage component
│   ├── Search.tsx     # Page for displaying search functionality
│   ├── Favorites.tsx   # Page for displaying favorite music
│   ├── Profile.tsx    # User profile page
│   └── Customization.tsx # Page for customizing app appearance
│
├── store/             # Redux store, actions, and reducers
│   ├── store.ts       # Store configuration (middleware, reducers)
│   └── slices/        # Redux slices (e.g., musicSlice, userSlice, favoritesSlice)
│       ├── userSlice.ts # Redux slice for user-related state
│       └── settingsSlice.ts # Redux slice for application settings
│
├── router/            # Routing configuration
│   └── AppRouter.tsx   # Main router setup with React Router DOM
│
├── services/          # External services and integrations
│   ├── authService.ts  # Authentication-related logic (login, signup)
│   ├── aiService.ts    # Logic for interacting with the AI assistant API
│   └── musicService.ts  # Logic for fetching and managing music
│
├── styles/            # Global styles and theming (CSS/SCSS, styled-components)
│   ├── globals.css     # Global styles for the app
│   └── theme.css       # Theme styles
│
├── utils/             # Utility functions and helpers (e.g., formatters, validators)
│   ├── formatDate.ts   # Function for formatting dates
│   └── validators.ts    # Functions for input validation
│
├── App.tsx            # Main App component
├── index.tsx          # Entry point of the application
└── types/             # TypeScript types and interfaces
    ├── musicTypes.ts   # Types related to music (e.g., Music, Album)
    ├── userTypes.ts    # Types related to users (e.g., UserProfile)
    └── aiTypes.ts      # Types related to AI assistant responses
