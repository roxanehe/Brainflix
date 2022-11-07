import brainflixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import "./Header.scss";

function Header() {
  return (
    <>
      <div className="header">
        <img className="header__logo" alt="logo" src={brainflixLogo} />
        <div className="header__search">
          <input type="text" className="header__input" placeholder="Search" />
          <img src={avatar} alt="search" className="header__avatar" />
        </div>
        <button className="header__button">UPLOAD</button>
        <img src={avatar} alt="upload" className="header__avatar--tablet" />
      </div>
    </>
  );
}
export default Header;
