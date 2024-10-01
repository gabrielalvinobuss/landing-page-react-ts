import "./Community.css";
import FlexGrid from "../FlexGrid/FlexGrid";
import groupSystemImage1 from "../../assets/group-system1.svg";
import groupSystemImage2 from "../../assets/group-system2.svg";
import groupSystemImage3 from "../../assets/group-system3.svg";

function Community() {
  return (
    <div className="Community">
      <div>
        <div className="large-text padding-top-40 text-box-community-section text-centralized">
          Manage your entire community in a single system
        </div>
        <p className="small-text-padding-top-8 text-centralized">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="padding-top-16">
        <FlexGrid center1440={true}>
          <div className="group-system-items">
            <div className="box-shadow-group-system">
              <img className="group-system-image" src={groupSystemImage1} />
              <h1>Membership Organisations</h1>
              <h5>
                Our membership management software provides full automation of
                membership renewals and payments
              </h5>
            </div>
            <div className="box-shadow-group-system">
              <img className="group-system-image" src={groupSystemImage2} />
              <h1>National Associations</h1>
              <h5 className="h5-group-system-center">
                Our membership management software provides full automation of
                membership renewals and payments
              </h5>
            </div>
            <div className="box-shadow-group-system">
              <img className="group-system-image" src={groupSystemImage3} />
              <h1 className="h1-group-system-right">Clubs And Groups</h1>
              <h5>
                Our membership management software provides full automation of
                membership renewals and payments
              </h5>
            </div>
          </div>
        </FlexGrid>
      </div>
    </div>
  );
}

export default Community;
