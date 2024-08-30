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
              src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?w=1380&t=st=1725045127~exp=1725045727~hmac=516985202420b96e09afb871e5866ca7faf71631d165dfbdf0df993a94cf0b22"
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
              src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?w=1380&t=st=1725045127~exp=1725045727~hmac=516985202420b96e09afb871e5866ca7faf71631d165dfbdf0df993a94cf0b22"
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
