import {
  Drawer,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  AppBar,
  Toolbar,
  Avatar,
} from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import format from "date-fns/format";

function RootLayout() {
  const menuItems = [
    {
      title: "All Notes",
      icon: <SubjectOutlined color="primary" />,
      path: "/",
      id: 1,
    },
    {
      title: "New Note",
      icon: <AddCircleOutlineOutlined color="primary" />,
      path: "/create",
      id: 2,
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="layout-container">
        {/* App Bar */}
        <AppBar className="">
          <Toolbar>
            <Typography variant="h6" component="span" className="date">
              Today is the {format(new Date(), "do MMMM Y")}
            </Typography>
            <Typography component="span">Maxjn</Typography>
            <Avatar sx={{ ml: 2 }} src="/avatar.png" />
          </Toolbar>
        </AppBar>
        {/* Drawer */}
        <Drawer variant="permanent" anchor="left" className="drawer">
          <Typography variant="h4" component="h1" sx={{ p: 2 }}>
            My Notes
          </Typography>
          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.id}
                onClick={() => navigate(item.path)}
                className={location.pathname == item.path ? "active" : ""}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            ))}
          </List>
        </Drawer>
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;
