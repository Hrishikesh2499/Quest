import Home from "../components/home";
import Register from "../components/register";
import { HOME, REGISTER } from "./ui.route.constant";

export const ROUTE_COMPONENT = {
  register: {
    component: Register,
    path: REGISTER,
  },
  home: {
    component: Home,
    path: HOME,
  },
};
