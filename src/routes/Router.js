import Intro from "../Pages/Intro/Intro";
// import Portfolio from "../Pages/Portfolio/Portfolio";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import PortfolioWrapper from "../Pages/Portfolio/PortfolioWrapper";
const Routes = [
  {
    path: "/",
    element: Intro,
  },

  {
    path: "/portfolio",
    element: PortfolioWrapper,
  },

  {
    path: "/about",
    element: About,
  },
  {
    path: "/contact",
    element: Contact,
  },
];

export default Routes;
