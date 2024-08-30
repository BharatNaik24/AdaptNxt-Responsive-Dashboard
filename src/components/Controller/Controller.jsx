import ConfigurationContext from "../../context/ConfigurationContext";
import { GiHamburgerMenu } from "react-icons/gi";

function Controller() {
  return (
    <ConfigurationContext.Consumer>
      {(value) => {
        const { onToggleShowLeftNavbar } = value;

        const onToggleLeftNavbar = (event) => {
          onToggleShowLeftNavbar(event.target.value);
        };

        return (
          <div>
            <GiHamburgerMenu size={30} onClick={onToggleLeftNavbar} />
          </div>
        );
      }}
    </ConfigurationContext.Consumer>
  );
}

export default Controller;
