import "./Video.scss";

function Video(props) {
  const { id, title, channel, image, onClick } = props;

  const handleVideoSelect = () => {
    onClick(id);
  };

  return (
    <div className="video" onClick={handleVideoSelect}>
      <img className="video__image" src={image} alt={title} />
      <div className="video__content">
        <span className="video__title">{title}</span>
        <span className="video__channel">{channel}</span>
      </div>
    </div>
  );
}
export default Video;
