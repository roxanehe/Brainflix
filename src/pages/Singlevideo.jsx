import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MainVideo from "../components/MainVideo/MainVideo";
import VideoView from "../components/VideoView/VideoView";
import Comments from "../components/Comments/Comments";
import Videos from "../components/Videos/Videos";
import loadingImage from "../assets/Images/loading.jpg";
import "./SingleVideo.scss";

export default function Singlevideo() {
  const { id } = useParams();
  const SERVER_API = "http://localhost:8000";
  const videolistlink = "/videos/";

  const API_URL = SERVER_API + videolistlink;
  const [videoData, setVideoData] = useState([]);

  const defaultValue = videoData.length > 0 ? videoData[0].id : null;
  const selectedvideoId = id || defaultValue;

  let API_URL_current = SERVER_API + videolistlink + `${selectedvideoId}`;
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((resp) => {
        setVideoData(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (videoData.length === 0) {
      return;
    }
    axios
      .get(API_URL_current)
      .then((res) => {
        setCurrentVideo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedvideoId, videoData]);

  if (currentVideo === null || undefined) {
    return (
      <div className="loading">
        <h1 className="loading__content">is loading...</h1>
        <img className="loading__img" src={loadingImage} alt="loading" />
      </div>
    );
  }

  const filteredVideo = videoData.filter((video) => {
    return video.id !== selectedvideoId;
  });

  return (
    <>
      <VideoView currentvideo={currentVideo} />
      <div className="videoinfo">
        <div className="videoinfo__current">
          <MainVideo currentvideo={currentVideo} />
          <Comments currentvideo={currentVideo} />
        </div>
        <div className="videoinfo__other">
          <Videos videoList={filteredVideo} />
        </div>
      </div>
    </>
  );
}
