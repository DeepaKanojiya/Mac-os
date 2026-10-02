import React from "react";
import MacWindows from "./MacWindows";
import "./spotify.scss";

function Spotify({ windowName,  setWindowState }) {
  return (
    <MacWindows width="25vw"  windowName={windowName} setWindowState={setWindowState}>
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/7cHWpjlm7bWzOSAsLSxz7h?utm_source=generator&theme=0&si=10f9360c412342aa"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindows>
  );
}

export default Spotify;
