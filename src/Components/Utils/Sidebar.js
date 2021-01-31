import React from 'react';
import clsx from 'clsx';
import { Box } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { IoMdPricetags } from 'react-icons/io';
import { IoSettingsSharp } from 'react-icons/io5';
import { HiHome } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { RiArticleFill } from 'react-icons/ri';
import { HiTemplate } from 'react-icons/hi';
import { ImUsers } from 'react-icons/im';
import { ImUserCheck } from 'react-icons/im';
import { Link } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import TopbarLogin from '../TopbarContents/TopbarContents'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
  },
  box: {
    backgroundColor: 'red',
    height: 50,
    verticalAlign: 'middle',
    textAlign: 'center'
  }
}));

export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  /** CHANGE LOGOS */
  const switchedLogo = (index) => {
    switch (index) {
      case '0':
        return <Tooltip title="Home" placement="right">
          <Link to="/home" style={{ color: '#757575' }} >
            <HiHome style={{ width: 30, height: 30 }} />
          </Link>
        </Tooltip>;
      case '1':
        return <Tooltip title="Dashboard" placement="right">
          <Link to="/dashboard" style={{ color: '#757575' }}>
            <MdDashboard style={{ width: 30, height: 30 }} />
          </Link>
        </Tooltip>;

      case '2':
        return <Tooltip title="List of articles" placement="right">
          <Link to="/articles" style={{ color: '#757575' }}>
            <RiArticleFill style={{ width: 30, height: 30 }} />
          </Link>
        </Tooltip>;
      case '3':
        return <Tooltip title="Add Template" placement="right">
          <Link to="/templates" style={{ color: '#757575' }}>
            <HiTemplate style={{ width: 30, height: 30 }} />
          </Link>
        </Tooltip>;
      case '4':
        return <Tooltip title="Tags" placement="right">
          <Link to="/tags" style={{ color: '#757575' }}>
            <IoMdPricetags style={{ width: 30, height: 30 }} />
          </Link>
        </Tooltip>;
      case '5':
        return <Tooltip title="Settings" placement="right">
          <Link to="/settings" style={{ color: '#757575' }}>
            <IoSettingsSharp style={{ width: 30, height: 30 }} />
          </Link>
        </Tooltip>;
      case '6':
        return <Tooltip title="Users" placement="right">
          <Link to="/users" style={{ color: '#757575' }}>
            <ImUsers style={{ width: 30, height: 30 }} />
          </Link>
        </Tooltip>;
      case '7':
        return <Tooltip title="Authors" placement="right">
          <Link to="/authors" style={{ color: '#757575' }}>
            <ImUserCheck style={{ width: 30, height: 30 }} />
          </Link>
        </Tooltip>
      default:
        return null;
    }
  }


  const primaryText = (text) => {
    switch (text) {
      case '0':
        return <Link to="/home" style={{ textDecoration: 'none', color: '#757575' }}>Home</Link>;
      case '1':
        return <Link to="/dashboard" style={{ textDecoration: 'none', color: '#757575' }}> Dashboard </Link>
      case '2':
        return <Link to="/articles" style={{ textDecoration: 'none', color: '#757575' }}> List Articles </Link>
      case '3':
        return <Link to="/templates" style={{ textDecoration: 'none', color: '#757575' }}> Add Template </Link>
      case '4':
        return <Link to="/tags" style={{ textDecoration: 'none', color: '#757575' }}>Tags</Link>;
      case '5':
        return <Link to="/settings" style={{ textDecoration: 'none', color: '#757575' }}> Settings </Link>
      case '6':
        return <Link to="/users" style={{ textDecoration: 'none', color: '#757575' }}> Users </Link>
      case '7':
        return <Link to="/authors" style={{ textDecoration: 'none', color: '#757575' }}> Authors </Link>
    }
  }

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            CMS
          </Typography>
          <TopbarLogin/>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        {/* FIRST LIST */}
        <List>
          {['0', '1', '2', '3'].map((text, index) => (

            <ListItem button divider key={index}>
              <ListItemIcon >{switchedLogo(text)}</ListItemIcon>
              <ListItemText primary={primaryText(text)} />
            </ListItem>
          ))}
        </List>
        {/* SECOND LIST */}
        <List style={{ padding: 0 }}>
          {['4', '5', '6', '7'].map((text, index) => (
            <ListItem button key={index} >
              <ListItemIcon>{switchedLogo(text)}</ListItemIcon>
              <ListItemText primary={primaryText(text)} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
