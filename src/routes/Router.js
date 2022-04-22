import Intro from "../Pages/Intro/Intro";
import Services from "../Pages/Services/Services";
import Portfolio from "../Pages/Portfolio/Portfolio";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
const Routes = [
  {
    path: "/",
    element: Intro,
  },
  {
    path: "/services",
    element: Services,
  },
  {
    path: "/portfolio",
    element: Portfolio,
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
