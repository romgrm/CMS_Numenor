import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Sidebar from '../Components/Utils/Sidebar'

const useStyles = makeStyles((theme) => ({
    root: {
      padding: 0
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <IconButton className={classes.menuButton} edge="start" color="primary" aria-label="menu">
                    <Sidebar/>
                </IconButton>
                <Typography className={classes.title} variant="h6">
                    CMS
                 </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}
