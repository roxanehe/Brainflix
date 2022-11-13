import brainflixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="header__logo" alt="logo" src={brainflixLogo} />
        </Link>
        <div className="header__search">
          <input type="text" className="header__input" placeholder="Search" />
          <img src={avatar} alt="search" className="header__avatar" />
        </div>
        <Link to="/upload" className="header__button">
          <span>UPLOAD</span>
        </Link>
        <img src={avatar} alt="upload" className="header__avatar--tablet" />
      </div>
    </>
  );
}
export default Header;
