import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa6";
import "./Footer.css";

const socialMediaLinks = [
  {
    icon: <FaFacebook size={30} />,
    url: "https://facebook.com",
    key: "facebook",
  },
  {
    icon: <AiFillInstagram size={30} />,
    url: "https://instagram.com",
    key: "instagram",
  },
  {
    icon: <FaXTwitter size={30} />,
    url: "https://twitter.com",
    key: "twitter",
  },
  { icon: <FaYoutube size={30} />, url: "https://youtube.com", key: "youtube" },
];

function Footer() {
  return (
    <div>
      <div className="socialPage">
        {socialMediaLinks.map(({ icon, url, key }) => (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            key={key}
            className="socialLink"
          >
            {icon}
          </a>
        ))}
      </div>
      <div className="copyRight">
        <p>
          Copyright <FaRegCopyright /> 2024, All Rights Reserved Designed by{" "}
          <a href="">BHARAT</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
