import "./Videoview.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function Videoview({ currentvideo }) {
  const [mainvideo, setmainvideo] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${currentvideo}?api_key=7b608c79-658e-42b8-ba9a-61b83eb265da`
      )
      .then(({ data }) => {
        setmainvideo(data);
      });
  }, [currentvideo]);

  if (mainvideo === null) {
    return <h1>is loading...</h1>;
  }

  return (
    <div className="videoview">
      <video
        className="videoview__content"
        controls
        width="100%"
        poster={mainvideo.image}
      />
    </div>
  );
}
export default Videoview;
