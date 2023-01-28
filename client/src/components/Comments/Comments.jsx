import "./Comments.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import Comment from "../Comment/Comment";

function Comments({ currentvideo }) {
  const commentsArray = currentvideo.comments;
  return (
    <>
      <h2 className="form__title">{commentsArray.length} Comments</h2>
      <div className="form">
        <img src={avatar} alt="avatar-img" className="form__img" />
        <div className="form__section">
          <form className="form__singleform">
            <div className="form__comment">
              <label htmlFor="comment" className="form__label">
                JOIN THE CONVERSATION
              </label>
              <textarea
                id="comment"
                className="form__comment-content"
                name="commentcontent"
                placeholder="Add a new comment"
              ></textarea>
              <input
                id="comment"
                type="text"
                className="form__comment-content--tablet"
                name="commentcontent"
                placeholder="Add a new comment"
              ></input>
            </div>
          </form>
          <button className="form__button">COMMENT</button>
        </div>
      </div>

      <div className="comments">
        {commentsArray.map((comment) => {
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
