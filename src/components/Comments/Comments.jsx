import "./Comments.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import Comment from "../Comment/Comment";
import { useEffect, useState } from "react";
import axios from "axios";

function Comments({ currentvideo }) {
  const [displaycomments, setdisplaycomments] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${currentvideo}?api_key=7b608c79-658e-42b8-ba9a-61b83eb265da`
      )
      .then(({ data }) => {
        setdisplaycomments(data);
      });
  }, [currentvideo]);

  if (displaycomments === null) {
    return <h1>is loading...</h1>;
  }

  return (
    <>
      <h2 className="title">{displaycomments.comments.length} Comments</h2>
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
        {displaycomments.comments.map((comment) => {
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
