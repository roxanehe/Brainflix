import "./Video.scss";

//import videodata from "../../assets/Data/videos.json";

function Video(props) {
  const { title, channel, image } = props;

  // const findMatch = videodata.find((video) => {
  //   const doesMatch = video.id === id;
  //   return doesMatch;
  // });

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
