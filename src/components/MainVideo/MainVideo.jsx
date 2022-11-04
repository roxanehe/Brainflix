import "./MainVideo.scss";

const MainVideo = (props) => {
  const {
    id,
    title,
    channel,
    description,
    views,
    likes,
    timestamp,
    video,
    image,
  } = props.MainVideo;
  return (
    <>
      <video width="200" height="200" poster={image} src={video} />
      <h1>{title}</h1>
      <div className="mainvideo__info">
        <h2>{channel}</h2>
        <h2>{timestamp}</h2>
        <h2>{views}</h2>
        <h2>{likes}</h2>
      </div>
      <p>{description}</p>
    </>
  );
};
export default MainVideo;
