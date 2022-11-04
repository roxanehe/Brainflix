import { useState } from "react";
import videodetail from "./data/video-details.json";
import videodata from "./data/videos.json";
import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videodetail[0]);

  return (
    <>
      <Header />
      <MainVideo MainVideo={selectedVideo} />
    </>
  );
}

export default App;
