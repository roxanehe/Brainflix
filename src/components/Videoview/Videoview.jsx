import "./VideoView.scss";

function VideoView({ currentvideo }) {
  return (
    <div className="videoview">
      <video
        className="videoview__content"
        controls
        width="100%"
        poster={currentvideo.image}
      />
    </div>
  );
}
export default VideoView;
