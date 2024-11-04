import FlexGrid from "../FlexGrid/FlexGrid";
import teslaImage from "../../assets/banner4-image.png";
import logo1 from "../../assets/customer-logo-1.svg";
import logo2 from "../../assets/client-logo2.svg";
import logo3 from "../../assets/client-logo3.svg";
import logo4 from "../../assets/client-logo4.svg";
import logo5 from "../../assets/client-logo5.svg";
import logo6 from "../../assets/client-logo6.svg";
import arrowRight from "../../assets/arrow-right.svg";
import "./Customers.css";
import { useEffect, useState } from "react";

type CustomersParams = {
  customerImage: string;
  customerText: string;
  customerName: string;
  customerCompany: string;
  customersLogos: string[];
  buttonArrow: string;
  buttonText: string;
};

function getServerData(): CustomersParams {
  const customersLogos: string[] = [logo1, logo2, logo3, logo4, logo5, logo6];

  return {
    customerImage: teslaImage,
    customerText:
      "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.",
    customerName: "Tim Smith",
    customerCompany: "British Dragon Boat Racing Association",
    customersLogos: customersLogos,
    buttonArrow: arrowRight,
    buttonText: "Meet all customers",
  };
}

function Customers() {
  const [customersData, setCustomersData] = useState<CustomersParams>({
    customerImage: "",
    customerText: "",
    customerName: "",
    customerCompany: "",
    customersLogos: [],
    buttonArrow: "",
    buttonText: "",
  });

  useEffect(() => {
    const tempData = getServerData();

    setCustomersData(tempData);
  }, []);

  return (
    <div className="Customers padding-bottom-48">
      <div className="background-grey">
        <FlexGrid center1440>
          <div className="content-area">
            <div className="left-side">
              <img src={customersData.customerImage} />
            </div>
            <div className="right-side">
              <h4>{customersData.customerText}</h4>
              <div className="headline-4 green-text padding-top-16">
                {customersData.customerName}
              </div>
              <h4 className="neutral-grey-text padding-top-8">
                {customersData.customerCompany}
              </h4>
              <div className="logos-grid padding-top-32">
                {customersData.customersLogos.map((customerLogo, index) => {
                  return (
                    <div>
                      <img key={index} src={customerLogo} />
                    </div>
                  );
                })}
                <div>
                  <div className="meet-button cursor-pointer">
                    <div className="headline-4 green-text">
                      {customersData.buttonText}
                    </div>
                    <div>
                      <img src={customersData.buttonArrow} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FlexGrid>
      </div>
    </div>
  );
}

export default Customers;
