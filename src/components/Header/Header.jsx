import { Link } from "react-router-dom";
import Controller from "../Controller/Controller";
import "./Header.css";
function Header() {
  return (
    <div className="headerComp">
      <Link to="/" className="linkClass">
        <img
          src="https://img.freepik.com/premium-vector/bharat-hindi-creative-calligraphy-lettering-text_684790-29.jpg"
          alt=""
          className="webLogo"
        />
      </Link>
      <Controller />
    </div>
  );
}

export default Header;
