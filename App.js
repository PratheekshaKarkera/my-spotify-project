import React, { useState } from 'react';
import './App.css';
import playlistData from './data';
import PlaylistHeader from './components/PlaylistHeader';
import TrackList from './components/TrackList';

function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="spotify-app">
      {/* If data exists, show Header. If not, hide it (no crash) */}
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
