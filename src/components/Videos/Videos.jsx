import "./Videos.scss";
import Video from "../Video/Video";

function Videos(props) {
  const { currentVideo, onSelectVideo, videoList } = props;
  let showVideo = videoList.filter((video) => {
    return video.id !== currentVideo.id;
  });
  return (
    <div className="videos">
      <h2 className="videostitle">NEXT VIDEOS</h2>
      {showVideo.map((video) => {
        return (
          <Video
            key={video.id}
            id={video.id}
            title={video.title}
            channel={video.channel}
            image={video.image}
            isSelected={currentVideo.id === video.id}
            onClick={onSelectVideo}
          />
        );
      })}
    </div>
  );
}

export default Videos;
