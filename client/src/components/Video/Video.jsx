import "./Video.scss";

function Video({ title, channel, image }) {
  return (
    <div className="video">
      <img className="video__image" src={image} alt={title} />
      <div className="video__content">
        <span className="video__title">{title}</span>
        <span className="video__channel">{channel}</span>
      </div>
    </div>
  );
}
export default Video;
