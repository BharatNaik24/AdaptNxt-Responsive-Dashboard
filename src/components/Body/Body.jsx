import ApexChart from "../Charts/Charts";
import PieChartComp from "../PieChartComp/PieChartComp";
import SideNavBar from "../SideNavBar/SideNavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import { useMediaQuery } from "react-responsive";
import "./Body.css";

function Body() {
  const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <>
      {isDesktop ? (
        <SideNavBar>
          <div className="bodyContainer">
            <div className="chartItem">
              <ApexChart />
              <PieChartComp />
            </div>
          </div>
        </SideNavBar>
      ) : (
        <MobileNavBar>
          <div className="bodyContainer">
            <div className="chartItem">
              <ApexChart />
              <PieChartComp />
            </div>
          </div>
        </MobileNavBar>
      )}
    </>
  );
}

export default Body;
