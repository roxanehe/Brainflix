import "./Videoview.scss";

function Videoview({ currentvideo }) {
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
export default Videoview;
