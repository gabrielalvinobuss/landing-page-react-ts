import FlexGrid from "../FlexGrid/FlexGrid";
import teslaImage from "../../assets/banner4-image.png"
import logo1 from "../../assets/customer-logo-1.svg"
import logo2 from "../../assets/client-logo2.svg"
import logo3 from "../../assets/client-logo3.svg"
import logo4 from "../../assets/client-logo4.svg"
import logo5 from "../../assets/client-logo5.svg"
import logo6 from "../../assets/client-logo6.svg"
import arrowRight from "../../assets/arrow-right.svg"
import "./Customers.css";

function Customers() {
  return <div className="Customers">
    <FlexGrid center1440>
      <div className="content-area">
        <div className="left-side">
          <img src={teslaImage} />
        </div>
        <div className="right-side">
          <h4>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</h4>
          <div className="headline-4 green-text padding-top-16">Tim Smith</div>
          <h4 className="neutral-grey-text padding-top-8">British Dragon Boat Racing Association</h4>
          <div className="logos-grid padding-top-32">
            <div>
              <img src={logo1} />
            </div>
            <div>
              <img src={logo2} />
            </div>
            <div>
              <img src={logo3} />
            </div>
            <div>
              <img src={logo4} />
            </div>
            <div>
              <img src={logo5} />
            </div>
            <div>
              <img src={logo6} />
            </div>
            <div>
              <div className="meet-button">
                <div className="headline-4 green-text">Meet all customers</div>
                <div>
                  <img src={arrowRight} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FlexGrid>
  </div>;
}

export default Customers;
