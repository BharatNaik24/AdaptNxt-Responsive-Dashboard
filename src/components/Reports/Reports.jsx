import SideNavBar from "../SideNavBar/SideNavBar";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import { useMediaQuery } from "react-responsive";
import "./Reports.css";

function Reports() {
  const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <>
      {isDesktop ? (
        <SideNavBar>
          <div className="reports-container">
            <img
              src="./public/images/no-results.png"
              alt="No Results"
              className="reports-image"
            />
            <h1 className="reports-heading">
              No Reports Found. Please Contact the Site Administrator.
            </h1>
          </div>
        </SideNavBar>
      ) : (
        <MobileNavBar>
          <div className="reports-container">
            <img
              src="./public/images/no-results.png"
              alt="No Results"
              className="reports-image"
            />
            <h1 className="reports-heading">
              No Reports Found. Please Contact the Site Administrator.
            </h1>
          </div>
        </MobileNavBar>
      )}
    </>
  );
}

export default Reports;
