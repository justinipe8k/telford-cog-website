import Home from "../pages/Home/Home";
import NotFoundError from "../pages/Error/NotFoundError";
import Leadership from "../pages/Leadership/Leadership";
import Beliefs from "../pages/Beliefs/Beliefs";
import Ministries from "../pages/Ministries/Ministries";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

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
    path: "/beliefs",
    component: Beliefs,
  },
  {
    exact: true,
    path: "/ministries",
    component: Ministries,
  },
  {
    exact: true,
    path: "/contact",
    component: Contact,
  },
  {
    component: NotFoundError,
  },
];

export default routes;
