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
        <h3 className="video__title">{title}</h3>
        <h4 className="video__channel">{channel}</h4>
      </div>
    </div>
  );
}
export default Video;
