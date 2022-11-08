import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import videodetail from "./data/video-details.json";
import videodata from "./data/videos.json";
import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import Videoview from "./components/Videoview/Videoview";
import Comments from "./components/Comments/Comments";
import Videos from "./components/Videos/Videos";
import Video from "./components/Video/Video";
import "./assets/Font/AvenirNextLTPro-Bold.otf";
import "./assets/Font/AvenirNextLTPro-Regular.otf";

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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Video />} />
          <Route path="/video/:id" element={<Video />} />
        </Routes>
      </BrowserRouter>
      <Videoview currentvideo={selectedVideo} />
      <div className="videoinfo">
        <div className="individeo">
          <MainVideo currentvideo={selectedVideo} />
          <Comments currentvideo={selectedVideo} />
        </div>

        <Videos
          videoList={videodata}
          currentVideo={selectedVideo}
          onSelectVideo={selectVideo}
        />
      </div>
    </>
  );
}

export default App;
