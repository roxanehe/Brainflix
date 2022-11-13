import "./Comment.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

const Comment = (props) => {
  const { name, comment, time } = props;
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
    <div className="comment">
      <div className="comment__img"></div>
      <div className="comment__main">
        <div className="comment__person">
          <span className="comment__name">{name}</span>
          <span className="comment__time">{convertime(time)}</span>
        </div>
        <span className="comment__content">{comment}</span>
      </div>
    </div>
  );
};
export default Comment;
