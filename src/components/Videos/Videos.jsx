import "./Videos.scss";
import Video from "../Video/Video";
import { Link } from "react-router-dom";

function Videos({ videoList }) {
  // const { currentVideo, onSelectVideo, videoList } = props;
  // let showVideo = videoList.filter((video) => {
  //   return video.id !== currentVideo.id;
  // });

  return (
    <div className="videos">
      <h2 className="videostitle">NEXT VIDEOS</h2>
      {videoList.map((video) => {
        return (
          <Link to={`/videos/${video.id}`}>
            <Video
              key={video.id}
              id={video.id}
              title={video.title}
              channel={video.channel}
              image={video.image}
              //isSelected={currentVideo.id === video.id}
              //onClick={onSelectVideo}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Videos;
