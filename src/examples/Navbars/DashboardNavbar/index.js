import { useState, useEffect } from "react";
// react-router components
import { useLocation, Link } from "react-router-dom";
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import NotificationItem from "examples/Items/NotificationItem";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "layouts/authentication/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
} from "examples/Navbars/DashboardNavbar/styles";

// Soft UI Dashboard React context
import {
  useSoftUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";

// Images
import user1 from "assets/images/curved-images/user1.png";
import password from "assets/images/curved-images/pwd.png"
import help from "assets/images/curved-images/help.png"
import signout from "assets/images/curved-images/signout.jpg"

function DashboardNavbar({ absolute, light, isMini }) {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);

  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        image={<img src={user1} alt="person" />}
        title={["Profile Settings"]}
        date="You can Edit your Profile Here"
        onClick={handleCloseMenu}
        component={Link}
        to="/edit-profile"
      />
      <NotificationItem
        image={<img src={password} alt="person" />}
        title={["Reset Password"]}
        date="You can Reset Your Password Here"
        onClick={handleCloseMenu}
        component={Link}
        to="/edit-profile"
      />
      <NotificationItem
        image={<img src={help} alt="person" />}
        title={["Help"]}
        date="Any Queries? Clik Here..."
        onClick={handleCloseMenu}
      />
      <NotificationItem
        image={<img src={signout} alt="person" />}
        title={["Sign Out"]}
        date="You can Sign Out your account Here"
        onClick={handleCloseMenu}
        component={Link}
        to="/authentication/email-signin"
      />
      {/*// <NotificationItem
      //   color="secondary"
      //   image={
      //     <Icon fontSize="small" sx={{ color: ({ palette: { white } }) => white.main }}>
      //       payment
      //     </Icon>
      //   }
      //   title={["", "Payment successfully completed"]}
      //   date="2 days"
      //   onClick={handleCloseMenu}
    // /> */}
    </Menu>
  );

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <SoftBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <SoftTypography style={{ color: "#FF0080", fontSize: "25px" }} component={Link}
          to="/dashboard">
            <strong>Inventory Distribution</strong>
          </SoftTypography>
        </SoftBox>

        {isMini ? null : (
          <SoftBox sx={(theme) => navbarRow(theme, { isMini })}>
            <SoftBox
              color="inherit"
              mb={{ xs: 1, md: 0 }}
              sx={(theme) => navbarRow(theme, { isMini })}
            >
              {/*<Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />*/}

              <SoftBox pr={1} style={{ color: "#0B2F8A", fontSize: "18px" }}>
                <strong>Welcome,{name}</strong>
              </SoftBox>
            </SoftBox>
            <SoftBox color={light ? "white" : "inherit"}>
              <Link  to="/authentication/email-signin">
                <IconButton sx={navbarIconButton} size="small" >
                  <Icon
                    sx={({ palette: { dark, white } }) => ({
                      color: light ? white.main : dark.main,
                    })}
                  >
                    account_circle
                  </Icon>
                  <SoftTypography
                    variant="button"
                    fontWeight="medium"
                    color={light ? "white" : "dark"}
                    onClick={logout}
                  >
                    Sign Out
                  </SoftTypography>
                </IconButton>
              </Link>
              <IconButton
                size="small"
                color="inherit"
                sx={navbarIconButton}
                aria-controls="notification-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleOpenMenu}
              >
                <Icon className={light ? "text-white" : "text-dark"}>settings</Icon>
              </IconButton>

              {renderMenu()}
            </SoftBox>
          </SoftBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
