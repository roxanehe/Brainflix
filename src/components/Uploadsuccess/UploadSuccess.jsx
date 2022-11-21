import "./UploadSuccess.scss";
import image from "../../assets/Images/success.jpg";
import { useNavigate } from "react-router-dom";

function UploadSuccess() {
  const navigate = useNavigate();
  return (
    <div className="uploadSuccess">
      <button className="uploadSuccess__button" onClick={() => navigate("/")}>
        Back to Home
      </button>
      <img className="uploadSuccess__img" src={image} alt="success" />
      <h3 className="uploadSuccess__title">Upload successfully!</h3>
    </div>
  );
}
export default UploadSuccess;
