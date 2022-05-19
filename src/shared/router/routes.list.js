import Home from "../pages/Home/Home";
import NotFoundError from "../pages/Error/NotFoundError";
import Pastors from "../pages/Pastors/Pastors";
import Beliefs from "../pages/About/Beliefs";
import PastorProfile from "../pages/Pastors/PastorProfile";

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/pastors",
    component: Pastors,
  },
  {
    exact: true,
    path: "/pastors/:pastor",
    component: PastorProfile,
  },
  {
    exact: true,
    path: "/about/beliefs",
    component: Beliefs,
  },
  {
    component: NotFoundError,
  },
];

export default routes;
