import "./Upload.scss";
import image from "../../assets/Images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

function Upload() {
  const [newvideo, setnewvideo] = useState([]);
  const formRef = useRef();
  const postapi_url = "http://localhost:8000/videos/";
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [descrip, setDescrip] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDescrip = (event) => {
    setDescrip(event.target.value);
  };

  const isFormValid = () => {
    if (title === "" || descrip === "") {
      return false;
    }
    return true;
  };

  useEffect(() => {
    axios
      .get(`${postapi_url}`)
      .then((res) => {
        setnewvideo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addvideo = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      axios
        .post(`${postapi_url}`, {
          description: formRef.current.upload__descrip.value,
          title: formRef.current.upload__video.value,
        })
        .then((response) => {
          navigate("/uploadsucess");
          console.log("upload video successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Failed to sign up, you have uncompleted items in your form");
    }
  };

  return (
    <div className="upload__border">
      <div className="upload">
        <h2 className="upload__title">Upload Video</h2>
        <div className="upload__content">
          <div className="upload__imgsection">
            <label className="upload__label">VIDEO THUMBNAIL</label>
            <img src={image} alt="avatar-img" className="upload__img" />
          </div>
          <form className="upload__form" onSubmit={addvideo} ref={formRef}>
            <label htmlFor="upload__video" className="upload__label">
              TITLE YOUR VIDEO
            </label>
            <input
              id="upload__video"
              className="upload__video"
              name="upload__video"
              placeholder="Add a title to your video"
              type="text"
              onChange={handleChangeTitle}
            ></input>
            <label htmlFor="upload__descrip" className="upload__label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              id="upload__descrip"
              className="upload__descrip"
              name="commentcontent"
              placeholder="Add a description to your video"
              onChange={handleChangeDescrip}
            ></textarea>
            <button className="upload__button" type="submit">
              PUBLISH
            </button>
          </form>
        </div>
        <div className="upload__action">
          <button className="upload__cancel" onClick={() => navigate("/")}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}
export default Upload;
