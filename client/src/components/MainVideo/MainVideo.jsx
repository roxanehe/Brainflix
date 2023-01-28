import "./MainVideo.scss";
import viewicon from "../../assets/Icons/views.svg";
import likeicon from "../../assets/Icons/likes.svg";
import convertime from "../../utils/utils";

const MainVideo = ({ currentvideo }) => {
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
