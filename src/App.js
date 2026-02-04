import React, { useState, useEffect } from 'react';
import './App.css';
import playlistData from './data';
import PlaylistHeader from './components/PlaylistHeader';
import TrackList from './components/TrackList';

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <div className="loading-screen"><h1>Loading...</h1></div>;

  return (
    <div className="spotify-app">
      <PlaylistHeader playlist={playlistData} />
      <div className="content-area">
        <TrackList 
          tracks={playlistData.tracks} 
          selectedId={selectedId} 
          onSelect={setSelectedId} 
        />
      </div>
    </div>
  );
}
export default App;
