import { useMediaQuery } from "react-responsive";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import SideNavBar from "../SideNavBar/SideNavBar";
import "./Account.css";

function Account() {
  const userDetail = {
    id: 1,
    name: "Bharat Naik Badavath",
    email: "bharatnaik877@gmail.com, bbnaik05@gmail.com",
    phone: "+91-9182053974",
    role: "Admin, Site Developer",
    lastLogin: new Date(),
    status: "Active",
  };

  const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <>
      {isDesktop ? (
        <SideNavBar>
          <div className="dashboard-container">
            <h1 className="dashboard-heading">User Details</h1>
            <div className="user-detail-card">
              <img
                src="https://img.freepik.com/premium-vector/bharat-hindi-creative-calligraphy-lettering-text_684790-29.jpg"
                alt="accountUser"
                className="webLogoo"
              />
              <h2>{userDetail.name}</h2>
              <p>Email: {userDetail.email}</p>
              <p>Phone: {userDetail.phone}</p>
              <p>Role: {userDetail.role}</p>
              <p>
                Last Login: {new Date(userDetail.lastLogin).toLocaleString()}
              </p>
              <p>Status: {userDetail.status}</p>
            </div>
          </div>
        </SideNavBar>
      ) : (
        <MobileNavBar>
          <div className="dashboard-container">
            <h1 className="dashboard-heading">User Details</h1>
            <div className="user-detail-card">
              <img
                src="https://img.freepik.com/premium-vector/bharat-hindi-creative-calligraphy-lettering-text_684790-29.jpg"
                alt="accountUser"
                className="webLogoo"
              />
              <h2>{userDetail.name}</h2>
              <p>Email: {userDetail.email}</p>
              <p>Phone: {userDetail.phone}</p>
              <p>Role: {userDetail.role}</p>
              <p>
                Last Login: {new Date(userDetail.lastLogin).toLocaleString()}
              </p>
              <p>Status: {userDetail.status}</p>
            </div>
          </div>
        </MobileNavBar>
      )}
    </>
  );
}

export default Account;
