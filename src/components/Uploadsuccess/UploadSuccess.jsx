import "./UploadSuccess.scss";
import image from "../../assets/Images/success.jpg";
import { useNavigate } from "react-router-dom";

function UploadSuccess() {
  const navigate = useNavigate();
  return (
    <div className="upload">
      <button className="upload__button" onClick={() => navigate("/")}>
        Back to Home
      </button>
      <img className="upload__img" src={image} alt="success" />
      <h3 className="upload__title">Upload successfully!</h3>
    </div>
  );
}
export default UploadSuccess;
