import React, { useState, useEffect } from 'react';
import './App.css';
import playlistData from './data';
import PlaylistHeader from './components/PlaylistHeader';
import TrackList from './components/TrackList';

function App() {
  const [selectedId, setSelectedId] = useState(null);
  // 1. Changed to false so it doesn't get stuck on a blank loading screen
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // 2. The return statement now uses safe checks (playlistData &&)
  return (
    <div className="spotify-app">
      {playlistData && <PlaylistHeader playlist={playlistData} />}
      <div className="content-area">
        {playlistData?.tracks && (
          <TrackList 
            tracks={playlistData.tracks} 
            selectedId={selectedId} 
            onSelect={setSelectedId} 
          />
        )}
      </div>
    </div>
  );
}

export default App;

