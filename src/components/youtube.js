/** @jsx jsx */

import { jsx } from "theme-ui";

export default ({ youTubeId }) => (
  <div
    sx={{
      position: "relative",
      width: "100%",
      paddingBottom: "56.25%", // 16:9 aspect ratio
      height: 0,
      overflow: "hidden",
      marginTop: "1rem",
      marginBottom: "1rem",
    }}
  >
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${youTubeId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      referrerPolicy="origin-when-cross-origin"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  </div>
);
