import React from "react";
import {
  fade,
  makeStyles,
  withStyles,
  useTheme,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import clsx from "clsx";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import logo from "../../Assets/img/Pinnacle/logoWhite.png";
import stickyLogo from "../../Assets/img/Pinnacle/drafts.png";
import { Button } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Button as SemanticButton } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Icon, ListHeader } from "semantic-ui-react";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Hidden from "@material-ui/core/Hidden";
import {logout} from '../../Actions/loginAction';

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function NavBarHeader(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [profileEl, setProfileEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isProfileElOpen = Boolean(profileEl);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleProfileMenuOpen = (event) => {
    setProfileEl(event.currentTarget);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleProfileClose = () => {
    setProfileEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const history = useHistory();
  const ProfileMenu = (
    <>
      <StyledMenuItem>
        <ListItemText
          primary={props.user && props.user.name}
          secondary={`${
            props.user && props.user.account_type === 'isPO'
              ? "Pinnacle Ulearn"
              : props.user && props.user.account_type === 'isCareer'
              ? "CotF Learners"
              : props.user && props.user.account_type
          } Account`}
        />
      </StyledMenuItem>
      <Divider />
      <StyledMenuItem component={Link} to="/learn/dashboard">
        <ListItemText primary="Your DashBoard" />
      </StyledMenuItem>
      <StyledMenuItem component={Link} to="/teach">
        <ListItemText primary="Account and Profile Setting" />
      </StyledMenuItem>
      <StyledMenuItem component={Link} to="/Volunteer">
        <ListItemText primary="Get Help" />
      </StyledMenuItem>
      <StyledMenuItem component={Link} to="/Coach">
        <ListItemText primary="Our Coaching & Trainings" />
      </StyledMenuItem>
      <StyledMenuItem button onClick={props.logout}>
        <ListItemText primary="Logout" />
      </StyledMenuItem>
    </>
  );
  const exploreMenu = (
    <>
      <StyledMenuItem component={Link} to="/learn">
        <ListItemText primary="Pinnacle eLearn" />
      </StyledMenuItem>
      <StyledMenuItem component={Link} to="/teach">
        <ListItemText primary="Become an instructor" />
      </StyledMenuItem>
      {/* <StyledMenuItem>
        <ListItemText primary="Join CotF Program" />
      </StyledMenuItem> */}
      <StyledMenuItem component={Link} to="/Volunteer">
        <ListItemText primary="Volunteer with Us" />
      </StyledMenuItem>
      <StyledMenuItem component={Link} to="/Coach">
        <ListItemText primary="Our Coaching & Trainings" />
      </StyledMenuItem>
    </>
  );

  const mobileMenuList = (
    <List>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/about">
        <ListItemText primary=" About us" />
      </ListItem>
      <ListItem button component={Link} to="/blog">
        <ListItemText primary="Blog" />
      </ListItem>
      <ListItem button component={Link} to="/courses">
        <ListItemText primary="Courses" />
      </ListItem>
      <ListItem button onClick={handleClick} button>
        <ListItemText primary="Our Products & Services" />
      </ListItem>
    </List>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const coachMenu = (
    <List>
      <ListItem button onClick={() => history.push(`/coach/actions`)}>
        Home
      </ListItem>
      <ListItem button onClick={() => history.push(`/coach/actions/message`)}>
        Message
      </ListItem>
      <ListItem button onClick={() => history.push(`/coach/actions/resources`)}>
        Resources
      </ListItem>
      <ListItem button>Preference</ListItem>
      <ListItem button> Assigned coach</ListItem>
    </List>
  );
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="default" elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(
              classes.menuButton,
              classes.sectionMobile,
              open && classes.hide
            )}
          >
            <MenuIcon />
          </IconButton>
          <div class="logo_container">
            <a href="#">
              <div class="logo_content d-flex flex-row align-items-end justify-content-start">
                <div class="logo_img">
                  <img src={stickyLogo} alt="" />
                </div>
              </div>
            </a>
          </div>
          <div className={classes.grow} />
          <Hidden mdDown>
            <Button component={Link} to="/">
              Home
            </Button>
            <Button component={Link} to="/about">
              About us
            </Button>
            <Button component={Link} to="/blog">
              Blog
            </Button>

            <div>
              <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"

                // onMouseLeave={handleClose}
              >
                Our Courses
              </Button>
            </div>
            <Button onClick={handleClick}>Our Product/Services</Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {exploreMenu}
            </StyledMenu>
            {/* <div className={classes.grow} /> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            {!props.user.id ? (
              <>
                <Button
                  variant="text"
                  component={Link}
                  to="/auth/signin"
                  style={{ padding: 10 }}
                >
                  Login / Sign Up
                </Button>
              </>
            ) : (
              <>
                <SemanticButton
                  className={clsx(
                    classes.menuButton,
                    classes.sectionMobile,
                    open && classes.hide
                  )}
                  icon="user"
                  content={props.user.name}
                  onClick={handleProfileMenuOpen}
                  basic
                  style={{border: 'none'}}
                />
                <StyledMenu
                  id="customized-menu"
                  anchorEl={profileEl}
                  keepMounted
                  open={Boolean(profileEl)}
                  onClose={handleProfileClose}
                >
                  {ProfileMenu}
                </StyledMenu>
              </>
            )}
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <h4 className="text-muted ml-2 mb-2">Navigate Pinnacle</h4>
        <Divider />
        {mobileMenuList}
        <h4 className="text-muted ml-2 mb-2">Coaching</h4>
        <Divider />
        {coachMenu}
        <Divider />
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, { logout })(NavBarHeader);
