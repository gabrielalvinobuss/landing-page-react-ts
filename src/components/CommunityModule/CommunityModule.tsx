import "./CommunityModule.css";
import CommunityModuleImage1 from "../../../src/assets/community-updates1.png";
// import CommunityModuleImage2 from "../../../src/assets/community-updates2.png";
// import CommunityModuleImage3 from "../../../src/assets/community-updates3.png";

type CommunityModuleParams = {
  text: string;
  module: string;
};

function CommunityModule(params: CommunityModuleParams) {
  if (params.module === "1") {
    return (
      <div>
        <div className="image-box-community-updates">
          <img src={CommunityModuleImage1} />
        </div>
        <div className="background-grey community-updates-content-box justify-content-center box-shadow-community-updates-content-box">
          <h2 className="medium-grey text-centralized">{params.text}</h2>
        </div>
      </div>
    );
  }
}

export default CommunityModule;
