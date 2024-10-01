import "./Header.css";
import logo from "../../assets/logo.svg";
import FlexGrid from "../FlexGrid/FlexGrid";
import BasicButton from "../BasicButton/BasicButton";

function Header() {
  return (
    <div className="background-grey">
      <FlexGrid center1440={true}>
        <div>
          <img className="logo-header" src={logo} />
        </div>
        <div className="menu-button-bar">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Service</div>
          <div className="cursor-pointer">Feature</div>
          <div className="cursor-pointer">Product</div>
          <div className="cursor-pointer">Testimonial</div>
          <div className="cursor-pointer">FAQ</div>
        </div>
        <div className="login-signup">
          <BasicButton
            label={"Login"}
            size={"medium"}
            color={"transparent"}
            settings={"login"}
          ></BasicButton>
          <BasicButton
            label={"Sign up"}
            size={"medium"}
            color={"green"}
            settings={"login"}
          ></BasicButton>
        </div>
      </FlexGrid>
    </div>
  );
}

export default Header;
