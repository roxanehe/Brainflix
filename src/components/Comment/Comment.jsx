import "./Comment.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

const Comment = (props) => {
  const { id, name, comment, time } = props;
  return (
    <div className="comment">
      <img src={avatar} alt="avatar-img" className="comment__img" />
      <span className="comment__name">{name}</span>
      <span className="comment__time">{time}</span>
      <span className="comment__content">{comment}</span>
    </div>
  );
};
export default Comment;
