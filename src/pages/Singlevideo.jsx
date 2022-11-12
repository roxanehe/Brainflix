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

  const URL =
    "https://project-2-api.herokuapp.com/videos?api_key=7b608c79-658e-42b8-ba9a-61b83eb265da";
  const [videodata, setvideodata] = useState([]);
  useEffect(() => {
    axios.get(URL).then((resp) => {
      setvideodata(resp.data);
    });
  }, []);

  const defaultValue = videodata.length > 0 ? videodata[0].id : null;
  const selectedvideoId = id || defaultValue;

  const filteredvideo = videodata.filter((video) => {
    return video.id !== selectedvideoId;
  });

  return (
    <>
      <Videoview currentvideo={selectedvideoId} />
      <div className="videoinfo">
        <div className="videoinfo__current">
          <MainVideo currentvideo={selectedvideoId} />
          <Comments currentvideo={selectedvideoId} />
        </div>
        <div className="videoinfo__other">
          <Videos videoList={filteredvideo} />
        </div>
      </div>
    </>
  );
}
