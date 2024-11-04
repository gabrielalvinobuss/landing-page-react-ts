import FlexGrid from "../FlexGrid/FlexGrid";
import achievementsIcon1 from "../../assets/achievements-icon1.svg";
import achievementsIcon2 from "../../assets/achievements-icon2.svg";
import achievementsIcon3 from "../../assets/achievements-icon3.svg";
import achievementsIcon4 from "../../assets/achievements-icon4.svg";
import "./Helping.css";
import { useEffect, useState } from "react";

type HelpingParams = {
  title: string;
  titleHighlighted: string;
  text: string;
  achievementsIcons: string[];
  achievementsTexts: string[];
  achievementsNumbers: string[];
};

function getServerData(): HelpingParams {
  const achievementsIcons: string[] = [
    achievementsIcon1,
    achievementsIcon2,
    achievementsIcon3,
    achievementsIcon4,
  ];

  const achievementsTexts: string[] = [
    "Members",
    "Clubs",
    "Event Bookings",
    "Payments",
  ];

  const achievementsNumbers: string[] = [
    "2,245,341",
    "46,328",
    "828,867",
    "1,926,436",
  ];

  return {
    title: "Helping a local",
    titleHighlighted: "business reinvent itself",
    text: "We reached here with our hard work and dedication",
    achievementsIcons: achievementsIcons,
    achievementsTexts: achievementsTexts,
    achievementsNumbers: achievementsNumbers,
  };
}

function Helping() {
  const [helpingData, setHelpingData] = useState<HelpingParams>({
    title: "",
    titleHighlighted: "",
    text: "",
    achievementsIcons: [],
    achievementsTexts: [],
    achievementsNumbers: [],
  });

  useEffect(() => {
    const tempData = getServerData();

    setHelpingData(tempData);
  }, []);

  return (
    <div className="Helping background-grey">
      <FlexGrid center1440>
        <div className="inner-gap">
          <div className="achievements-box-left-text">
            <h2 className="dark-grey-text">{helpingData.title}</h2>
            <h2 className="green-text">{helpingData.titleHighlighted}</h2>
            <h5 className="black-text padding-top-8">{helpingData.text}</h5>
          </div>
          <FlexGrid center1440={false}>
            <div className="achievements-data">
              <div className="achievements-infos">
                <div>
                  <img
                    className="icon"
                    src={helpingData.achievementsIcons[0]}
                  />
                </div>
                <div>
                  <h3 className="dark-grey-text">
                    {helpingData.achievementsNumbers[0]}
                  </h3>
                  <h5>{helpingData.achievementsTexts[0]}</h5>
                </div>
              </div>
              <div className="achievements-infos">
                <div>
                  <img
                    className="icon"
                    src={helpingData.achievementsIcons[1]}
                  />
                </div>
                <div>
                  <h3 className="dark-grey-text">
                    {helpingData.achievementsNumbers[1]}
                  </h3>
                  <h5>{helpingData.achievementsTexts[1]}</h5>
                </div>
              </div>
              <div className="achievements-infos">
                <div>
                  <img
                    className="icon"
                    src={helpingData.achievementsIcons[2]}
                  />
                </div>
                <div>
                  <h3 className="dark-grey-text">
                    {helpingData.achievementsNumbers[2]}
                  </h3>
                  <h5>{helpingData.achievementsTexts[2]}</h5>
                </div>
              </div>
              <div className="achievements-infos">
                <div>
                  <img
                    className="icon"
                    src={helpingData.achievementsIcons[3]}
                  />
                </div>
                <div>
                  <h3 className="dark-grey-text">
                    {helpingData.achievementsNumbers[3]}
                  </h3>
                  <h5>{helpingData.achievementsTexts[3]}</h5>
                </div>
              </div>
            </div>
          </FlexGrid>
        </div>
      </FlexGrid>
    </div>
  );
}

export default Helping;
