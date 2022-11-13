import "./Video.scss";

function Video(props) {
  const { title, channel, image } = props;

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
