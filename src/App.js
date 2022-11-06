import { useState } from "react";
import videodetail from "./data/video-details.json";
import videodata from "./data/videos.json";
import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import Comments from "./components/Comments/Comments";
import Videos from "./components/Videos/Videos";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videodetail[0]);

  const selectVideo = (videoId) => {
    const videoToSelect = videodetail.find((video) => {
      return video.id === videoId;
    });
    setSelectedVideo(videoToSelect);
  };

  return (
    <>
      <Header />
      <MainVideo currentvideo={selectedVideo} />
      <Comments currentvideo={selectedVideo} />
      <Videos
        videoList={videodata}
        currentVideo={selectedVideo}
        onSelectVideo={selectVideo}
      />
    </>
  );
}

export default App;
