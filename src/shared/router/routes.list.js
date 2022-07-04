import Home from "../pages/Home/Home";
import NotFoundError from "../pages/Error/NotFoundError";
import Leadership from "../pages/Leadership/Leadership";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";
import Sermons from "../pages/Sermons/Sermons";
import Live from "../pages/Live/Live";
import KidsAndYouth from "../pages/KidsAndYouth/KidsAndYouth";
import Calendar from "../pages/Calendar/Calendar";

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/about",
    component: About,
  },
  {
    exact: true,
    path: "/leadership",
    component: Leadership,
  },
  {
    exact: true,
    path: "/contact",
    component: Contact,
  },
  {
    exact: true,
    path: "/live",
    component: Live,
  },
  {
    exact: true,
    path: "/gallery",
    component: Gallery,
  },
  {
    exact: true,
    path: "/kidsandyouth",
    component: KidsAndYouth,
  },
  {
    exact: true,
    path: "/sermons",
    component: Sermons,
  },
  {
    exact: true,
    path: "/calendar",
    component: Calendar,
  },
  {
    component: NotFoundError,
  },
];

export default routes;
