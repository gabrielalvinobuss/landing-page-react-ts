import BasicButton from "../BasicButton/BasicButton";
import bannerImage2 from "../../assets/banner2-image.svg";
import bannerImage3 from "../../assets/banner3-image.svg";
import "./Banner.css";
import FlexGrid from "../FlexGrid/FlexGrid";
import { Key, useEffect } from "react";

type BannerParams = {
  title: string[];
  text: string[];
  bannerType: string[];
  bannerImages: string[];
};

function getServerData(): BannerParams {
  const bannerImages: string[] = [bannerImage2, bannerImage3];
  const bannerType: string[] = ["banner1", "banner2"];
  const title: string[] = [
    "The unseen of spending three years at Pixelgrade",
    "How to design your site footer like we did",
  ];
  const text: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
    "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.",
  ];
  return {
    title: title,
    text: text,
    bannerType: bannerType,
    bannerImages: bannerImages,
  };
}

function Banner() {
  const [bannerData, setBannerData] = useState<BannerParams>({
    bannerType: [],
    title: [],
    text: [],
    bannerImages: [],
  });

  useEffect(() => {
    const tempData = getServerData();

    setBannerData(tempData);
  }, []);

  return (
    <div className="Banner">
      <FlexGrid center1440={true}>
        <div className="image-banner2">
          {bannerData.bannerImages.map((bannerImage: string, index: Key) => {
            return <img key={index} src={bannerImage} />;
          })}
        </div>
        <div className="box-banner2-text">
          {bannerData.title.map((title: string, index: Key) => {
            return (
              <h2 key={index} className="dark-grey-text">
                {title}
              </h2>
            );
          })}
          {bannerData.text.map((text: string, index: Key) => {
            return (
              <h5 key={index} className="padding-top-16">
                {text}
              </h5>
            );
          })}
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
