import "./Header.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <div className="background-grey">
      <div className="flex-grid center-1440">
        <div>
          <img className="logo-header" src={logo} />
        </div>
        <div className="flex-grid menu-button-bar">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Service</div>
          <div className="cursor-pointer">Feature</div>
          <div className="cursor-pointer">Product</div>
          <div className="cursor-pointer">Testimonial</div>
          <div className="cursor-pointer">FAQ</div>
        </div>
        <div className="login-signup">
          <div className="small-transparent-button">Login</div>
          <div className="small-rounded-green-button">Sign up</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
