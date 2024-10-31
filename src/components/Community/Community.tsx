import "./Community.css";
import FlexGrid from "../FlexGrid/FlexGrid";
import groupSystemImage1 from "../../assets/group-system1.svg";
import groupSystemImage2 from "../../assets/group-system2.svg";
import groupSystemImage3 from "../../assets/group-system3.svg";
import { useEffect, useState } from "react";

type CommunityParams = {
  title: string;
  subtitle: string;
  communitiesImage: string[];
  communitiesTitle: string[];
  communitiesBodyText: string[];
};

function getServerData(): CommunityParams {
  const communitiesImage: string[] = [
    groupSystemImage1,
    groupSystemImage2,
    groupSystemImage3,
  ];

  const communitiesTitle: string[] = [
    "Membership Organisations",
    "National Associations",
    "Clubs And Groups",
  ];

  const communitiesBodyText: string[] = [
    "Our membership management software provides full automation of membership renewals and payments",
    "Our membership management software provides full automation of membership renewals and payments",
    "Our membership management software provides full automation of membership renewals and payments",
  ];

  return {
    title: "Manage your entire community in a single system",
    subtitle: "Who is Nextcent suitable for?",
    communitiesImage: communitiesImage,
    communitiesTitle: communitiesTitle,
    communitiesBodyText: communitiesBodyText,
  };
}

function Community() {
  const [communityData, setCommunityData] = useState<CommunityParams>({
    title: "",
    subtitle: "",
    communitiesImage: [],
    communitiesTitle: [],
    communitiesBodyText: [],
  });

  useEffect(() => {
    const tempData = getServerData();

    setCommunityData(tempData);
  }, []);

  return (
    <div className="Community">
      <div>
        <div className="large-text padding-top-40 text-box-community-section text-centralized">
          {communityData.title}
        </div>
        <p className="small-text-padding-top-8 text-centralized">
          {communityData.subtitle}
        </p>
      </div>
      <div className="padding-top-16">
        <FlexGrid center1440={true}>
          <div className="group-system-items">
            <div className="box-shadow-group-system">
              <img
                className="group-system-image"
                src={communityData.communitiesImage[0]}
              />
              <h1>{communityData.communitiesTitle[0]}</h1>
              <h5>{communityData.communitiesBodyText[0]}</h5>

              {/* REVER SE DA PRA REUTILIZAR ALGO DAQUI */}
              {/* {communityData.communitiesImage.map((communityImage, index) => {
                return (
                  <img
                    key={index}
                    className="group-system-image"
                    src={communityImage}
                  />
                );
              })}
              {communityData.communitiesTitle.map((communityTitle, index) => {
                return <h1 key={index}>{communityTitle}</h1>;
              })}
              {communityData.communitiesBodyText.map(
                (communityBodyText, index) => {
                  return <h5 key={index}>{communityBodyText}</h5>;
                }
              )} */}
            </div>
            <div className="box-shadow-group-system">
              <img
                className="group-system-image"
                src={communityData.communitiesImage[1]}
              />
              <h1>{communityData.communitiesTitle[1]}</h1>
              <h5 className="h5-group-system-center">
                {communityData.communitiesBodyText[1]}
              </h5>
            </div>
            <div className="box-shadow-group-system">
              <img
                className="group-system-image"
                src={communityData.communitiesImage[2]}
              />
              <h1 className="h1-group-system-right">
                {communityData.communitiesTitle[2]}
              </h1>
              <h5>{communityData.communitiesBodyText[2]}</h5>
            </div>
          </div>
        </FlexGrid>
      </div>
    </div>
  );
}

export default Community;
