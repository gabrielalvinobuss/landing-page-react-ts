import "./Clients.css";
import client1logo from "../../assets/client-logo1.svg";
import client2logo from "../../assets/client-logo2.svg";
import client3logo from "../../assets/client-logo3.svg";
import client4logo from "../../assets/client-logo4.svg";
import client5logo from "../../assets/client-logo5.svg";
import client6logo from "../../assets/client-logo6.svg";
import client7logo from "../../assets/client-logo7.svg";
import FlexGrid from "../FlexGrid/FlexGrid";

function Clients() {
  return (
    <div>
      <div>
        <p className="large-text text-centralized padding-top-40">
          Our Clients
        </p>
        <p className="small-text-padding-top-8 text-centralized">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <FlexGrid center1440>
        <div className="clients-grid">
          <div>
            <img className="clients-logo" src={client1logo} />
          </div>
          <div>
            <img className="clients-logo" src={client2logo} />
          </div>
          <div>
            <img className="clients-logo" src={client3logo} />
          </div>
          <div>
            <img className="clients-logo" src={client4logo} />
          </div>
          <div>
            <img className="clients-logo" src={client5logo} />
          </div>
          <div>
            <img className="clients-logo" src={client6logo} />
          </div>
          <div>
            <img className="clients-logo" src={client7logo} />
          </div>
        </div>
      </FlexGrid>
    </div>
  );
}

export default Clients;
