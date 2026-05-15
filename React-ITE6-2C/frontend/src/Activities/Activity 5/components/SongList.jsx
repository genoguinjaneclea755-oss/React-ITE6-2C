export default function SongList({ songs, onSelect }) {
  return (
    <div className="grid">
      {songs.map((song) => (
        <div
          key={song.trackId}
          className="card"
          onClick={() => onSelect(song)}
        >
          <img
            src={song.artworkUrl100.replace("100x100bb", "300x300bb")}
            alt=""
          />
          <p>{song.trackName}</p>
          <small>{song.artistName}</small>
        </div>
      ))}
    </div>
  );
}