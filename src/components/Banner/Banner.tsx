import BasicButton from "../BasicButton/BasicButton";
import bannerImage2 from "../../assets/banner2-image.svg";
import bannerImage3 from "../../assets/banner3-image.svg";
import "./Banner.css";
import FlexGrid from "../FlexGrid/FlexGrid";

type BannerParams = {
  title: string;
  text: string;
  bannerType: "banner1" | "banner2";
};

function Banner({
  bannerType = "banner2",
  title = "",
  text = "",
}: BannerParams) {
  return (
    <div className="Banner">
      <FlexGrid center1440={true}>
        <div className="image-banner2">
          {bannerType === "banner1" ? (
            <img src={bannerImage2} />
          ) : (
            <img src={bannerImage3} />
          )}
        </div>
        <div className="box-banner2-text">
          <h2 className="dark-grey-text">{title}</h2>
          <h5 className="padding-top-16">{text}</h5>
          <BasicButton
            label={"Learn More"}
            size={"medium"}
            color={"green"}
            settings={"normal"}
          ></BasicButton>
        </div>
      </FlexGrid>
    </div>
  );
}

export default Banner;
