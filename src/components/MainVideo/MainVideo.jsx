import "./MainVideo.scss";
import viewicon from "../../assets/Icons/views.svg";
import likeicon from "../../assets/Icons/likes.svg";

const MainVideo = ({ currentvideo }) => {
  function convertime(datetoconvert) {
    const currentDate = new Date(datetoconvert);
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    let dateString;
    if (currentMonth < 10 && currentDayOfMonth < 10) {
      dateString = `0${currentMonth}/0${currentDayOfMonth}/${currentYear}`;
    } else if (currentDayOfMonth < 10) {
      dateString = `${currentMonth}/0${currentDayOfMonth}/${currentYear}`;
    } else if (currentMonth < 10) {
      dateString = `0${currentMonth}/${currentDayOfMonth}/${currentYear}`;
    } else {
      dateString = `${currentMonth}/${currentDayOfMonth}/${currentYear}`;
    }
    return dateString;
  }

  return (
    <div>
      <div className="mainvideo__sec">
        <h1 className="mainvideo__title">{currentvideo.title}</h1>
        <div className="mainvideo__info">
          <div className="mainvideo__infoside">
            <h3>By {currentvideo.channel}</h3>
            <h3 className="mainvideo__greyinfo">
              {convertime(currentvideo.timestamp)}
            </h3>
          </div>

          <div className="mainvideo__infoside">
            <div className="mainvideo__iconinfo">
              <img className="mainvideo__icon" src={viewicon} alt="views" />
              <h3 className="mainvideo__greyinfo">{currentvideo.views}</h3>
            </div>
            <div className="mainvideo__iconinfo">
              <img className="mainvideo__icon" src={likeicon} alt="likes" />
              <h3 className="mainvideo__greyinfo">{currentvideo.likes}</h3>
            </div>
          </div>
        </div>
        <p className="mainvideo__content">{currentvideo.description}</p>
      </div>
    </div>
  );
};
export default MainVideo;
