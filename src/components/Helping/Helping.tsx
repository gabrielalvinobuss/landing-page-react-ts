import FlexGrid from "../FlexGrid/FlexGrid";
import achievementsIcon1 from "../../assets/achievements-icon1.svg";
import achievementsIcon2 from "../../assets/achievements-icon2.svg";
import achievementsIcon3 from "../../assets/achievements-icon3.svg";
import achievementsIcon4 from "../../assets/achievements-icon4.svg";
import "./Helping.css";

function Helping() {
  return (
    <div className="Helping background-grey">
      <FlexGrid center1440 gap72>
        <div className="achievements-box-left-text">
          <h2 className="dark-grey-text">Helping a local</h2>
          <h2 className="green-text">business reinvent itself</h2>
          <h5 className="black-text padding-top-8">
            We reached here with our hard work and dedication
          </h5>
        </div>
        <FlexGrid center1440={false}>
          <div className="achievements-data">
            <div className="achievements-infos">
              <div>
                <img className="icon" src={achievementsIcon1} />
              </div>
              <div>
                <h3 className="dark-grey-text">2,245,341</h3>
                <h5>Members</h5>
              </div>
            </div>
            <div className="achievements-infos">
              <div>
                <img className="icon" src={achievementsIcon2} />
              </div>
              <div>
                <h3 className="dark-grey-text">46,328</h3>
                <h5>Clubs</h5>
              </div>
            </div>
            <div className="achievements-infos">
              <div>
                <img className="icon" src={achievementsIcon3} />
              </div>
              <div>
                <h3 className="dark-grey-text">828,867</h3>
                <h5>Event Bookings</h5>
              </div>
            </div>
            <div className="achievements-infos">
              <div>
                <img className="icon" src={achievementsIcon4} />
              </div>
              <div>
                <h3 className="dark-grey-text">1,926,436</h3>
                <h5>Payments</h5>
              </div>
            </div>
          </div>
        </FlexGrid>
      </FlexGrid>
    </div>
  );
}

export default Helping;
