import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button } from "@mui/material";

import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AdminRoute from "./../../Components/AdminRoute/AdminRoute";
import useAuth from "../../Hooks/useAuth";
import ManageAllOrders from "./ManageAllOrders/ManageAllOrders";
import AddProduct from "./AddProduct/AddProduct";
import ManageProduct from "./ManageProduct/ManageProduct";
import MyOrders from "./MyOrders/MyOrders";
import PrivateRoute from "./../../Components/PrivateRoute/PrivateRoute";
import Review from "./Review/Review";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <Box sx={{ display: "flex", flexDirection: "column", fontSize: 28 }}>
        <Link to={`/home`}>
          <Button color="inherit">Home</Button>
        </Link>

        {!admin && (
          <Link to={`${url}`}>
            <Button color="inherit">My Orders</Button>
          </Link>
        )}
        {!admin && (
          <Link to={`${url}/review`}>
            <Button color="inherit">Review</Button>
          </Link>
        )}
        {!admin && (
          <Link to="/purchase">
            <Button color="inherit">purchase</Button>
          </Link>
        )}

        {admin && (
          <Link to={`${url}/manageAllOrders`}>
            <Button color="inherit">Manage all orders</Button>
          </Link>
        )}
        {admin && (
          <Link to={`${url}`}>
            <Button color="inherit">Manage Products</Button>
          </Link>
        )}
        {admin && (
          <Link to={`${url}/makeAdmin`}>
            <Button color="inherit">Make Admin</Button>
          </Link>
        )}
        {admin && (
          <Link to={`${url}/addProduct`}>
            <Button color="inherit">Add a product</Button>
          </Link>
        )}
        <Link to={`/logIn`} onClick={logout}>
          <Button color="inherit">Logout</Button>
        </Link>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          {!admin ? (
            <PrivateRoute exact path={`${path}`}>
              <MyOrders />
            </PrivateRoute>
          ) : (
            <AdminRoute exact path={`${path}`}>
              <ManageProduct />
            </AdminRoute>
          )}
          <PrivateRoute exact path={`${path}/review`}>
            <Review />
          </PrivateRoute>
          <Route exact path={path}></Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrders />
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
