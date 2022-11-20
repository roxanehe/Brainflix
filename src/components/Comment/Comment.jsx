import "./Comment.scss";
import convertime from "../../utils/utils";

const Comment = ({ name, comment, time }) => {
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
