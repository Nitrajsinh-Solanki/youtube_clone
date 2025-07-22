# YouTube Clone

A modern YouTube clone built with React, Vite, and Tailwind CSS. This application replicates core YouTube functionality including video browsing, searching, and video playback with a responsive design.

## 🚀 Features

- **Home Page**: Browse trending videos with category filters
- **Video Search**: Search for videos with real-time results
- **Video Player**: Watch videos with ReactPlayer integration
- **Responsive Design**: Fully responsive layout for all devices
- **Sidebar Navigation**: Complete YouTube-style sidebar with all sections
- **Video Details**: View video statistics, descriptions, and channel information
- **Suggested Videos**: Related video recommendations
- **Loading States**: Smooth loading animations and states

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.1
- **Styling**: Tailwind CSS 3.4.10
- **Routing**: React Router DOM 6.26.1
- **Video Player**: React Player 2.16.0
- **HTTP Client**: Axios 1.7.5
- **Icons**: React Icons 5.3.0
- **Date Formatting**: Moment.js 2.30.1
- **Number Formatting**: js-abbreviation-number 1.4.0

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nitrajsinh-Solanki/youtube_clone
   cd yt_clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_YOUTUBE_API_KEY=your_rapidapi_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔑 API Setup

This project uses the YouTube v3 API via RapidAPI. To get your API key:

1. Visit [RapidAPI YouTube API](https://rapidapi.com/ytdlfree/api/youtube-v31/)
2. Subscribe to the API
3. Copy your API key
4. Add it to your `.env` file as `VITE_YOUTUBE_API_KEY`

## 📁 Project Structure

```
src/
├── components/
│   ├── Home.jsx              # Main home page component
│   ├── Navbar.jsx            # Navigation bar with search
│   ├── Sidebar.jsx           # YouTube-style sidebar
│   ├── Video.jsx             # Individual video card
│   ├── PlayingVideo.jsx      # Video player page
│   ├── Search.jsx            # Search results page
│   ├── SearchCard.jsx        # Search result video card
│   ├── SuggestedVideo.jsx    # Suggested video component
│   └── ListItem.jsx          # Category filter chips
├── context/
│   └── AuthProvider.jsx      # Global state management
├── loader/
│   ├── Loading.jsx           # Loading spinner component
│   └── Time.jsx              # Video duration formatter
├── utils/
│   └── rapidapi.js           # API utility functions
├── App.jsx                   # Main app component
├── main.jsx                  # App entry point
└── index.css                 # Global styles
```

## 🎯 Key Components

### Home Component
- Displays trending videos in a responsive grid
- Category filter chips for content discovery
- Integrated sidebar navigation

### Video Player
- Full-featured video player using ReactPlayer
- Video statistics (views, likes, comments)
- Channel information with verification badges
- Related video suggestions

### Search Functionality
- Real-time search with Enter key or button click
- Search results with video previews
- Detailed video information in search cards

### Responsive Design
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Smooth hover effects and transitions

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint


## 🔧 Configuration Files

- **Vite Config**: `vite.config.js` - Build tool configuration
- **Tailwind Config**: `tailwind.config.js` - Styling framework setup
- **PostCSS Config**: `postcss.config.js` - CSS processing
- **ESLint Config**: Linting rules for code quality

## 🌟 Features in Detail

### Video Categories
- All, Music, Programming, News, Live, Sports, and more
- Horizontal scrollable category bar
- Smooth scroll behavior



## 🙏 Acknowledgments

- YouTube for design inspiration
- RapidAPI for YouTube API access
- React community for excellent libraries
- Tailwind CSS for utility-first styling
