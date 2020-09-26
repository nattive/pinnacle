import React, { useEffect } from "react";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MailIcon from "@material-ui/icons/Mail";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { VERIFY_USER, LOAD_SUB, LOGIN_USER } from "../Actions/types";
import { useSelector } from "react-redux";
import { logout, getUser } from "../Actions/loginAction";
import { allCourses, fetchMainCategory } from "../Actions/courseAction";
import {
  MenuItem, Badge, Menu, LinearProgress,
  Popper, Grow, Paper, ClickAwayListener,
  MenuList, Button
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Search from "../General Components/SearchCourse";
import { Icon } from "semantic-ui-react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import logo_white from '../Assets/img/Pinnacle/logoWhite.png'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
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
  textBrandColor: {
    color: "#fff",
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

function HeadBar(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [courseAnchorEl, setCourseAnchorEl] = React.useState(null);
  const [categoryAnchorEl, setCategoryAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const user = useSelector((state) => state.auth.user);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    props.allCourses()
    props.fetchMainCategory()

  }, [])
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCourseMenuOpen = (event) => {
    console.log(event.currentTarget);
    setCourseAnchorEl(event.currentTarget);
  };
  const handleCategoryMenuOpen = (event) => {
    setCategoryAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleCourseMenuClose = () => {
    setCourseAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleCategoryMenuClose = () => {
    setCategoryAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleUserLogout = () => {
    localStorage.removeItem("P_access_token");
    dispatch({ type: LOGIN_USER, payload: ''})
    props.logout();
    history.push("/");
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem   onClick={handleUserLogout}  >
        Logout
      </MenuItem>
    </Menu>
  );
  const myCourses = (
    <Popper
      open={Boolean(courseAnchorEl)}
      anchorEl={courseAnchorEl}
      role={undefined}
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleCourseMenuClose}>
              <MenuList
                autoFocusItem={Boolean(courseAnchorEl)}
                id="menu-list-grow"
              >
                {props.ENROLLED_courses.map 
                ? props.ENROLLED_courses.map(course => 
                <>
                <MenuItem>
                  <ListItemIcon>
                    <Avatar variant="square" src={course.banner} />
                  </ListItemIcon>
                  <ListItemText
                    primary={course.title}
                    secondary={course.subtitle}
                  />
                </MenuItem>

                </>) :
                <MenuItem>
                  <ListItemText
                    primary={'You are Yet to Enroll in any course'}
                  />
                </MenuItem>
                
                
                 }
                <Divider />
                <MenuItem>
                  <Button
                    variant="contained"
                    fullWidth
                    disableElevation
                    color="primary"
                  >
                    See Enrolled Courses
                  </Button>
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
  const category = (
    <>
      <Menu
        id="long-menu"
        anchorEl={categoryAnchorEl}
        keepMounted
        elevation={0}
        open={Boolean(categoryAnchorEl)}
        onClose={handleCategoryMenuClose}
        PaperProps={{
          style: {
            maxHeight: 120 * 4.5,
            // width: '20ch',
          },
        }}
      >
        <Paper>
          <ClickAwayListener >
            <div style={{ display: 'flex' }}>
              <MenuList autoFocusItem={Boolean(categoryAnchorEl)} id="menu-list-grow"  >
                {
                  props.mainCategories && props.mainCategories.length > 0 ? props.mainCategories.map(course =>
                    <React.Fragment key={course.id}>
                      <MenuItem onClick={() => dispatch({ type: LOAD_SUB, payload: course.sub_categories })}   onMouseEnter={() => dispatch({ type: LOAD_SUB, payload: course.sub_categories})} >
                        <ListItemText primary={course.name} />
                        <ListItemIcon>
                          <ArrowRightIcon />
                        </ListItemIcon>
                      </MenuItem>
                      <Divider />
                    </React.Fragment>
                  ) : (<>
                      loading...
                  </>)
                }

              </MenuList>
              <MenuList hidden={props.loadSub.length < 0} autoFocusItem={Boolean(categoryAnchorEl)} id="menu-list-grow"  >
                {
                  props.loadSub && props.loadSub.length > 0 ? props.loadSub.map(sub =>
                    <React.Fragment key={sub.id}>
                      <MenuItem >
                        <ListItemText primary={sub.name} />
                      </MenuItem>
                      <Divider />
                    </React.Fragment>
                  ) : (<>
                        loading...
                  </>)
                }

              </MenuList>
            </div>
          </ClickAwayListener>
        </Paper>
      </Menu>
    </>
  );

  const menu = (
    <>
      <MenuItem>
        <Typography variant="button" className={classes.title}>
          <Link to="/" className={classes.textBrandColor}>
            Home
          </Link>
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="button" className={classes.title}>
          <Link to="/learn/dashboard" className={classes.textBrandColor}>
            Dashboard
          </Link>
        </Typography>
      </MenuItem>
      <MenuItem button onClick={handleCourseMenuOpen}>
        <Typography variant="button" className={classes.title}>
          My Courses
        </Typography>
      </MenuItem>
      <MenuItem button onClick={handleCategoryMenuOpen} >
        <Typography variant="button" className={classes.title}>
          Category
        </Typography>
      </MenuItem>

    </>
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

      <MenuItem onClick={handleUserLogout}>
        <IconButton
          aria-label="logout current user"
          // aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  useEffect(() => {
    props.getUser();
  }, []);

  return (
    <div className={classes.grow}>
      <AppBar
        // position="fixed"
        variant="outlined"
        color="primary"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <img src={logo_white} alt="pinnacle logo" style={{ width: 100 }} />
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
          {menu}
          {myCourses}
          {category}
          <di className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Search />

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <ShoppingCartIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar
                style={{
                  backgroundColor: "#fff",
                  border: `1px solid #2c2c6b`,
                  color: "#2c2c6b",
                }}
                alt={props.user.name}
                src="/static/images/avatar/1.jpg"
              />
            </IconButton>
          </div>
        </Toolbar>
        {props.busy && <LinearProgress />}
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
      </Drawer>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
  mainCategories: state.course.mainCategories,
  loadSub: state.course.loadSub,
  busy: state.loading.busy,
  ENROLLED_courses: state.course.ENROLLED_courses,
});

const mapDispatchToProps = {
  logout,
  getUser,
  allCourses,
  fetchMainCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadBar);
