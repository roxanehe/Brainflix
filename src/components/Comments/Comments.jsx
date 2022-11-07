import "./Comments.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import Comment from "../Comment/Comment";

function Comments(props) {
  return (
    <>
      <h2 className="title">{props.currentvideo.comments.length} Comments</h2>
      <div className="forms">
        <img src={avatar} alt="avatar-img" className="form__img" />
        <div className="form-button">
          <form className="form">
            <div className="form__comment">
              <label htmlFor="comment" className="form__label">
                JOIN THE CONVERSATION
              </label>
              <textarea
                id="comment"
                name="commentcontent"
                placeholder="Add a new comment"
              ></textarea>
            </div>
          </form>
          <button className="button">COMMENT</button>
        </div>
      </div>
      <div className="comments">
        {props.currentvideo.comments.map((comment) => {
          return (
            <>
              <Comment
                key={comment.id}
                id={comment.id}
                name={comment.name}
                comment={comment.comment}
                time={comment.timestamp}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
export default Comments;
