import CommunityModule, {
  CommunityModuleParams,
} from "../CommunityModule/CommunityModule";
import FlexGrid from "../FlexGrid/FlexGrid";
import CommunityModuleImage1 from "../../../src/assets/community-updates1.png";
import CommunityModuleImage2 from "../../../src/assets/community-updates2.png";
import CommunityModuleImage3 from "../../../src/assets/community-updates3.png";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

import "./CommunityUpdates.css";

function getServerData(): CommunityModuleParams[] {
  return [
    {
      text: "Creating Streamlined Safeguarding Processes with OneRen",
      imageUrl: CommunityModuleImage1,
    },
    {
      text: "What are your safeguarding responsibilities and how can you manage them?",
      imageUrl: CommunityModuleImage2,
    },
    {
      text: "Revamping the Membership Model with Triathlon Australia",
      imageUrl: CommunityModuleImage3,
    },
  ];
}

function CommunityUpdates() {
  const [localList, setLocalList] = useState<CommunityModuleParams[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    window.setTimeout(() => {
      const tempList = getServerData();

      setLocalList(tempList);

      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    console.log("Local list mudou de valor");
  }, [localList]);

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
            membership income and lot's more.
          </h4>
        </div>
      </div>

      <FlexGrid center1440 gap="24">
        {loading === true ? (
          <Loading />
        ) : (
          localList.map((communityItem, index) => {
            return (
              <CommunityModule
                key={index}
                text={communityItem.text}
                imageUrl={communityItem.imageUrl}
              />
            );
          })
        )}
      </FlexGrid>
    </div>
  );
}

export default CommunityUpdates;
