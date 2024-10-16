import CommunityModule from "../CommunityModule/CommunityModule";
import FlexGrid from "../FlexGrid/FlexGrid";
import "./CommunityUpdates.css";

function CommunityUpdates() {
  return (
    <div className="CommunityUpdates">
      <div>
        <div className="dark-grey-text text-centralized padding-top-48">
          <h2>Caring is the new marketing</h2>
        </div>
        <div className="padding-top-8 text-content-area text-centralized">
          <h4>
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </h4>
        </div>
      </div>
      <FlexGrid center1440>
        <CommunityModule
          text={"Creating Streamlined Safeguarding Processes with OneRen"}
          module={"1"}
        />
        <CommunityModule
          text={
            "What are your safeguarding responsibilities and how can you manage them?"
          }
          module={"2"}
        />
        <CommunityModule
          text={"Revamping the Membership Model with Triathlon Australia"}
          module={"3"}
        />
      </FlexGrid>
    </div>
  );
}

export default CommunityUpdates;
