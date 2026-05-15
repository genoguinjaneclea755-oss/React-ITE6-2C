import { useState, useEffect, useRef } from "react";
import SongList from "./components/SongList";
import Player from "./components/Player";
import "./App.css";

export default function Act5() {
  const [songs, setSongs] = useState([]);
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const getSongs = async (term) => {
    setLoading(true);

    const res = await fetch(
      `https://itunes.apple.com/search?term=${term}&entity=song&limit=24`
    );
    const data = await res.json();

    setSongs(data.results || []);
    setLoading(false);
  };

  useEffect(() => {
    getSongs("top hits 2024");
  }, []);

  const searchSongs = () => {
    const term = inputRef.current.value;
    if (term) getSongs(term);
  };

  return (
    <div className="app">
      <h1>🎵 Trending Songs</h1>

      <div className="search">
        <input ref={inputRef} placeholder="Search song or artist" />
        <button onClick={searchSongs}>Search</button>
      </div>

      {loading && <div className="loader"></div>}

      <SongList songs={songs} onSelect={setCurrent} />

      <Player song={current} />
    </div>
  );
}

