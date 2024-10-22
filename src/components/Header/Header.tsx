import "./Header.css";
import logo from "../../assets/logo.svg";
import FlexGrid from "../FlexGrid/FlexGrid";
import BasicButton from "../BasicButton/BasicButton";
import { useEffect, useState } from "react";

const menuItems: string[] = [
  "Home",
  "Service",
  "Feature",
  "Product",
  "Testimonial",
  "FAQ",
];

type TemplateDataType = {
  logo: string;
  menuItems: string[];
  loginLabel: string;
  signUpLabel: string;
};

function getServerData(): TemplateDataType {
  return {
    loginLabel: "Login",
    logo: logo,
    menuItems: menuItems,
    signUpLabel: "Sign Up",
  };
}

function Header() {
  const [templateData, setTemplateData] = useState<TemplateDataType>({
    logo: "",
    menuItems: [],
    loginLabel: "",
    signUpLabel: "",
  });

  useEffect(() => {
    const tempData = getServerData();

    setTemplateData(tempData);
  }, []);

  return (
    <div className="Header">
      <div className="background-grey">
        <FlexGrid center1440 padding104>
          <div>
            <img className="logo-header" src={templateData.logo} />
          </div>
          <div className="menu-button-bar">
            {templateData.menuItems.map((menuItem, index) => {
              return (
                <div key={index} className="cursor-pointer">
                  {menuItem}
                </div>
              );
            })}
          </div>
          <div className="login-signup">
            <BasicButton
              label={templateData.loginLabel}
              size={"medium"}
              color={"transparent"}
              settings={"login"}
            ></BasicButton>
            <BasicButton
              label={templateData.signUpLabel}
              size={"medium"}
              color={"green"}
              settings={"login"}
            ></BasicButton>
          </div>
        </FlexGrid>
      </div>
    </div>
  );
}

export default Header;
