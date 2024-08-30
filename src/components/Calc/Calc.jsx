import { useMediaQuery } from "react-responsive";
import SideNavBar from "../SideNavBar/SideNavBar";
import "./Calc.css";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
const calculatorsList = [
  {
    id: 1,
    name: "Scientific Calculator",
    link: "https://www.desmos.com/scientific",
    image: "https://www.desmos.com/favicon.ico",
  },
  {
    id: 2,
    name: "BMI Calculator",
    link: "https://www.calculator.net/bmi-calculator.html",
    image: "https://www.calculator.net/favicon.ico",
  },
  {
    id: 3,
    name: "Mortgage Calculator",
    link: "https://www.mortgagecalculator.org/",
    image: "https://www.mortgagecalculator.org/favicon.ico",
  },
  {
    id: 4,
    name: "Currency Converter",
    link: "https://www.xe.com/currencyconverter/",
    image: "https://www.xe.com/favicon.ico",
  },
  {
    id: 5,
    name: "Percentage Calculator",
    link: "https://www.calculator.net/percent-calculator.html",
    image: "https://www.calculator.net/favicon.ico",
  },
  {
    id: 6,
    name: "Loan Calculator",
    link: "https://www.bankrate.com/calculators/mortgages/loan-calculator.aspx",
    image: "https://www.bankrate.com/favicon.ico",
  },
  {
    id: 7,
    name: "Age Calculator",
    link: "https://www.calculator.net/age-calculator.html",
    image: "https://www.calculator.net/favicon.ico",
  },
  {
    id: 8,
    name: "Date Calculator",
    link: "https://www.timeanddate.com/date/dateadd.html",
    image: "https://www.timeanddate.com/favicon.ico",
  },
  {
    id: 9,
    name: "Compound Interest Calculator",
    link: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator",
    image: "https://www.investor.gov/sites/all/themes/investorgov/favicon.ico",
  },
  {
    id: 10,
    name: "Calories Calculator",
    link: "https://www.calculator.net/calorie-calculator.html",
    image: "https://www.calculator.net/favicon.ico",
  },
];
function Calc() {
  const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <>
      {isDesktop ? (
        <SideNavBar>
          <div className="calcContainer">
            <h1 className="calcHeading">Calculators</h1>
            {/* Your list rendering here */}
            <ul className="calcList">
              {/* Assuming you have a calculatorsList array */}
              {calculatorsList.map((eachItem) => (
                <li key={eachItem.id} className="calcItem">
                  <img
                    src={eachItem.image}
                    alt={eachItem.name}
                    className="calcImage"
                  />
                  <p className="calcName">{eachItem.name}</p>
                  <a
                    href={eachItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calcLink"
                  >
                    Use Calculator
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </SideNavBar>
      ) : (
        <MobileNavBar>
          <div className="calcContainer">
            <h1 className="calcHeading">Calculators</h1>
            {/* Your list rendering here */}
            <ul className="calcList">
              {/* Assuming you have a calculatorsList array */}
              {calculatorsList.map((eachItem) => (
                <li key={eachItem.id} className="calcItem">
                  <img
                    src={eachItem.image}
                    alt={eachItem.name}
                    className="calcImage"
                  />
                  <p className="calcName">{eachItem.name}</p>
                  <a
                    href={eachItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="calcLink"
                  >
                    Use Calculator
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </MobileNavBar>
      )}
    </>
  );
}

export default Calc;
