import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MainVideo from "../components/MainVideo/MainVideo";
import Videoview from "../components/Videoview/Videoview";
import Comments from "../components/Comments/Comments";
import Videos from "../components/Videos/Videos";
import "./Singlevideo.scss";

export default function Singlevideo() {
  const { id } = useParams();
  const SERVER_API = "http://localhost:8000";
  const videolistlink = "/videos/";

  const API_URL = SERVER_API + videolistlink;
  const [videodata, setvideodata] = useState([]);

  const defaultValue = videodata.length > 0 ? videodata[0].id : null;
  const selectedvideoId = id || defaultValue;

  let API_URL_current = SERVER_API + videolistlink + `${selectedvideoId}`;
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((resp) => {
        setvideodata(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (videodata.length === 0) {
      return;
    }
    axios.get(API_URL_current).then((res) => {
      setCurrentVideo(res.data);
    });
  }, [selectedvideoId, videodata]);

  if (currentVideo === null || undefined) {
    return <h1>is loading...</h1>;
  }

  const filteredvideo = videodata.filter((video) => {
    return video.id !== selectedvideoId;
  });

  return (
    <>
      <Videoview currentvideo={currentVideo} />
      <div className="videoinfo">
        <div className="videoinfo__current">
          <MainVideo currentvideo={currentVideo} />
          <Comments currentvideo={currentVideo} />
        </div>
        <div className="videoinfo__other">
          <Videos videoList={filteredvideo} />
        </div>
      </div>
    </>
  );
}
