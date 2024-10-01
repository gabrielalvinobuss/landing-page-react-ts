import "./BannerMain.css";
import bannerImage from "../../assets/banner-image.svg";
import BasicButton from "../BasicButton/BasicButton";

function BannerMain() {
  return (
    <div className="background-grey">
      <div className="flex-grid center-1440">
        <div className="container-text-banner">
          <p className="banner-gray-text">Lessons and insights</p>
          <p className="green-text banner-gray-text">from 8 years</p>
          <p className="small-text-padding-top-16">
            Where to grow your business as a photographer: site or social media?
          </p>
          <BasicButton
            label={"Register"}
            size={"medium"}
            color={"green"}
            settings={"normal"}
          ></BasicButton>
        </div>
        <div className="image-banner1">
          <img src={bannerImage} />
        </div>
      </div>
    </div>
  );
}

export default BannerMain;
