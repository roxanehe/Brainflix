import "./Comment.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

const Comment = (props) => {
  const { name, comment, time } = props;
  const currentDate = new Date(time);
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
    <div className="comment">
      <img src={avatar} alt="avatar-img" className="comment__img" />
      <div className="comment__main">
        <div className="comment__person">
          <span className="comment__name">{name}</span>
          <span className="comment__time">{dateString}</span>
        </div>
        <span className="comment__content">{comment}</span>
      </div>
    </div>
  );
};
export default Comment;
