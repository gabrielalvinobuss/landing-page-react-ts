import "./CommunityModule.css";
import arrowRight from "../../assets/arrow-right.svg";

export type CommunityModuleParams = {
  text: string;
  imageUrl: string;
};

function CommunityModule(params: CommunityModuleParams) {
  return (
    <div className="flex-grid-community">
      <div className="community-updates-grid justify-content-center padding-top-16">
        <div className="image-box-community-updates">
          <img src={params.imageUrl} />
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
  );
}

export default CommunityModule;
