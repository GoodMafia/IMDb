import React, { useState } from "react";
import "./Search.scss";

export default function Search() {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      fetch(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBtpCmb4WHmKy3I10fzVprfjfW172m8ZnQ&q=${query}&part=snippet&type=video&maxResults=10`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } 
        })
        .then((data) => {
          if (data.items.length === 0) {
            setError("No videos found");
            setVideos([])
          } else {
            setVideos(data.items);
            setError(null);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError("Error fetching data");
        });
    }
  };

  return (
    <div className="block">
      <p className="search-title">Search on YouTube using IMDb</p>
      <form className="formBlock" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Your request here"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <div className="videos-list">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-item">
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
              />
              <h3>{video.snippet.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}