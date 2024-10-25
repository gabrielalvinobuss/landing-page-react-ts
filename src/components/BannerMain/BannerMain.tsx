import "./BannerMain.css";
import bannerImage from "../../assets/banner-image.svg";
import BasicButton from "../BasicButton/BasicButton";
import FlexGrid from "../FlexGrid/FlexGrid";
import { useEffect, useState } from "react";

type BannerMainParams = {
  title: string;
  highlitedTitle: string;
  text: string;
  image: string;
  buttonLabel: string;
};

function getServerData(): BannerMainParams {
  return {
    title: "Lessons and insights",
    highlitedTitle: "from 8 years",
    text: "Where to grow your business as a photographer: site or social media?",
    image: bannerImage,
    buttonLabel: "Register",
  };
}

function BannerMain() {
  const [bannerMainData, setBannerMainData] = useState<BannerMainParams>({
    title: "",
    highlitedTitle: "",
    text: "",
    image: "",
    buttonLabel: "",
  });

  useEffect(() => {
    const tempData = getServerData();

    setBannerMainData(tempData);
  }, []);

  return (
    <div className="BannerMain background-grey">
      <FlexGrid center1440>
        <div className="inner-gap">
          <div className="container-text-banner">
            <p className="banner-gray-text">{bannerMainData.title}</p>
            <p className="green-text banner-gray-text">
              {bannerMainData.highlitedTitle}
            </p>
            <p className="small-text-padding-top-16">{bannerMainData.text}</p>
            <BasicButton
              label={bannerMainData.buttonLabel}
              size={"medium"}
              color={"green"}
              settings={"normal"}
            ></BasicButton>
          </div>
          <div className="image-banner1">
            <img src={bannerMainData.image} />
          </div>
        </div>
      </FlexGrid>
    </div>
  );
}

export default BannerMain;
