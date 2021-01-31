/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import Person from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Maps from "views/Maps/Maps.js";
// core components/views for RTL layout
import TodoApp from "components/Todo/TodoApp";

const dashboardRoutes = [
  {
    path: "/todoList",
    name: "TodoList",
    rtlName: "TodoList",
    icon: PlaylistAddIcon,
    component: TodoApp,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "UserProfile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
  },
];

export default dashboardRoutes;
