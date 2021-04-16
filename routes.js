import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,

    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: Person,

    layout: "/admin",
  },
  {
    path: "/staff-list",
    name: "Nhân viên",
    icon: "content_paste",

    layout: "/admin",
  },
  {
    path: "/table-list",
    name: "Tình trạng xe",
    icon: "content_paste",

    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,

    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,

    layout: "/admin",
  },
];

export default dashboardRoutes;
