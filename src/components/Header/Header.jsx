import Button from "../Button/Button";
import brainflixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import "./Header.scss";

function Header() {
  return (
    <>
      <div className="header">
        <img className="header__logo" src={brainflixLogo} />
        <div className="header__search">
          <input type="text" className="header__input" />
          <img src={avatar} className="header__avatar" />
        </div>
        <Button />
        <img src={avatar} className="header__avatar--tablet" />
      </div>
    </>
  );
}
export default Header;
