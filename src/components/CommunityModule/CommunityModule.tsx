import "./CommunityModule.css";
import CommunityModuleImage1 from "../../../src/assets/community-updates1.png";
import FlexGrid from "../FlexGrid/FlexGrid";
import CommunityModuleImage2 from "../../../src/assets/community-updates2.png";
import CommunityModuleImage3 from "../../../src/assets/community-updates3.png";
// DELET AFTER THE ARROW IMPORT AFTER ADAPT TO THE COMPONENT BUTTON
import arrowRight from "../../assets/arrow-right.svg";
// import BasicButton from "../BasicButton/BasicButton";

type CommunityModuleParams = {
  text: string;
  module: string;
};

function CommunityModule(params: CommunityModuleParams) {
  if (params.module === "1") {
    return (
      // <FlexGrid center1440>
      <div className="flex-grid-community">
        <div className="community-updates-grid justify-content-center padding-top-16">
          <div className="image-box-community-updates">
            <img src={CommunityModuleImage1} />
          </div>
          <div className="background-grey community-updates-content-box justify-content-center box-shadow-community-updates-content-box">
            <div className="headline-4 medium-grey text-centralized inner-content-text-area">
              {params.text}
            </div>
            <div className="readmore-button padding-top-16 cursor-pointer">
              <div className="headline-4 green-text">Readmore</div>
              <div>
                <img className="justify-arrow-center" src={arrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
      // </FlexGrid>
    );
  }
  if (params.module === "2") {
    return (
      // <FlexGrid center1440>
      <div className="flex-grid-community">
        <div className="community-updates-grid justify-content-center padding-top-16">
          <div className="image-box-community-updates">
            <img src={CommunityModuleImage2} />
          </div>
          <div className="background-grey community-updates-content-box justify-content-center box-shadow-community-updates-content-box">
            <div className="headline-4 medium-grey text-centralized inner-content-text-area">
              {params.text}
            </div>
            <div className="readmore-button padding-top-16 cursor-pointer">
              <div className="headline-4 green-text">Readmore</div>
              <div>
                <img className="justify-arrow-center" src={arrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
      // </FlexGrid>
    );
  }
  return (
    // <FlexGrid center1440>
    <div className="flex-grid-community">
      <div className="community-updates-grid justify-content-center padding-top-16">
        <div className="image-box-community-updates">
          <img src={CommunityModuleImage3} />
        </div>
        <div className="background-grey community-updates-content-box justify-content-center box-shadow-community-updates-content-box">
          <div className="headline-4 medium-grey text-centralized inner-content-text-area">
            {params.text}
          </div>
          <div className="readmore-button padding-top-16 cursor-pointer">
            <div className="headline-4 green-text">Readmore</div>
            <div>
              <img className="justify-arrow-center" src={arrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </FlexGrid>
  );
}

export default CommunityModule;
