import "./Comments.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import Comment from "../Comment/Comment";

function Comments(props) {
  return (
    <>
      <h2 className="title title--margin">Join the Conversation</h2>
      <section className="form-comment">
        <form className="form">
          <img src={avatar} alt="avatar-img" className="form__img" />
          <div className="form__comment">
            <label htmlFor="name" className="form__label">
              NAME
            </label>
            <input
              id="name"
              name="commenter"
              type="text"
              placeholder="Enter your name"
            />
            <label htmlFor="comment" className="form__label">
              COMMENT
            </label>
            <textarea
              id="comment"
              name="commentcontent"
              placeholder="Add a new comment"
            ></textarea>
            <button className="form__button">COMMENT</button>
          </div>
        </form>
      </section>
      <div className="comments">
        {props.currentvideo.comments.map((comment) => {
          return (
            <>
              <Comment
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
