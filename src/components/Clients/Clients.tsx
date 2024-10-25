import "./Clients.css";
import client1logo from "../../assets/client-logo1.svg";
import client2logo from "../../assets/client-logo2.svg";
import client3logo from "../../assets/client-logo3.svg";
import client4logo from "../../assets/client-logo4.svg";
import client5logo from "../../assets/client-logo5.svg";
import client6logo from "../../assets/client-logo6.svg";
import client7logo from "../../assets/client-logo7.svg";
import FlexGrid from "../FlexGrid/FlexGrid";
import { useEffect, useState } from "react";

type ClientsParams = {
  title: string;
  text: string;
  clientsLogo: string[];
};

function getServerData(): ClientsParams {
  const clientsLogo: string[] = [
    client1logo,
    client2logo,
    client3logo,
    client4logo,
    client5logo,
    client6logo,
    client7logo,
  ];

  return {
    title: "Our Clients",
    text: "We have been working with some Fortune 500+ clients",
    clientsLogo: clientsLogo,
  };
}

function Clients() {
  const [clientsData, setClientsData] = useState<ClientsParams>({
    title: "",
    text: "",
    clientsLogo: [],
  });

  useEffect(() => {
    const tempData = getServerData();

    setClientsData(tempData);
  }, []);

  return (
    <div className="Clients">
      <div>
        <p className="large-text text-centralized padding-top-40">
          {clientsData.title}
        </p>
        <p className="small-text-padding-top-8 text-centralized">
          {clientsData.text}
        </p>
      </div>
      <FlexGrid center1440>
        <div className="clients-grid">
          {clientsData.clientsLogo.map((clientLogo, index) => {
            return (
              <img key={index} className="clients-logo" src={clientLogo} />
            );
          })}
        </div>
      </FlexGrid>
    </div>
  );
}

export default Clients;
