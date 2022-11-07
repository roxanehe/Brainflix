import "./MainVideo.scss";
import viewicon from "../../assets/Icons/views.svg";
import likeicon from "../../assets/Icons/likes.svg";

const MainVideo = (props) => {
  const { title, channel, timestamp, views, likes, description } =
    props.currentvideo;
  const currentDate = new Date(timestamp);
  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  let dateString;
  if (currentMonth >= 10) {
    dateString = `${currentMonth}/${currentDayOfMonth}/${currentYear}`;
  } else {
    dateString = `0${currentMonth}/${currentDayOfMonth}/${currentYear}`;
  }
  return (
    <div>
      <div className="mainvideo__sec">
        <h1 className="mainvideo__title">{title}</h1>
        <div className="mainvideo__info">
          <div className="mainvideo__infoside">
            <h3>By {channel}</h3>
            <h3 className="mainvideo__greyinfo">{dateString}</h3>
          </div>

          <div className="mainvideo__infoside">
            <div className="mainvideo__iconinfo">
              <img className="mainvideo__icon" src={viewicon} alt="views" />
              <h3 className="mainvideo__greyinfo">{views}</h3>
            </div>
            <div className="mainvideo__iconinfo">
              <img className="mainvideo__icon" src={likeicon} alt="likes" />
              <h3 className="mainvideo__greyinfo">{likes}</h3>
            </div>
          </div>
        </div>
        <p className="mainvideo__content">{description}</p>
      </div>
    </div>
  );
};
export default MainVideo;
