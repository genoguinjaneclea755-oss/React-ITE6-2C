export default function Player({ song }) {
  if (!song) return null;

  return (
    <div className="player">
      <img
        src={song.artworkUrl100.replace("100x100bb", "300x300bb")}
        alt=""
      />
      <div>
        <h3>{song.trackName}</h3>
        <p>{song.artistName}</p>
        <audio controls autoPlay src={song.previewUrl}></audio>
      </div>
    </div>
  );
}