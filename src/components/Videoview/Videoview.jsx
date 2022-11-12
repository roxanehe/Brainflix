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

  return <video controls width="100%" height="100%" poster={mainvideo.image} />;
}
export default Videoview;
