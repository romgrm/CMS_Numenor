import React from 'react'
import { CardHeader, Paper, Grid, Menu, MenuItem } from '@material-ui/core';
import { FaUserCircle } from 'react-icons/fa';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles(() => ({
    headerStyle: {
        alignSelf: 'center',
        margin: 0,
    }
}))



export default function ListCms() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (event) => {
        setOpen(event.currentTarget);
    };
    const handleClickClose = () => {
        setOpen(null);
    };
    return (
                <Grid container spacing={3} direction="row" justify="center" alignItems="center" style={{padding: 10}}>
                    <Grid item lg={4} >
                        <Paper elevation={3} >
                            <CardHeader
                                className={classes.headerStyle}
                                avatar={
                                    <Avatar>
                                        <FaUserCircle />
                                    </Avatar>}
                                title="Name of your CMS"
                                subheader="https://mycms.com"
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon onClick={handleClickOpen} />
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={open}
                                            keepMounted
                                            open={Boolean(open)}
                                            onClose={handleClickClose}
                                        >
                                            <MenuItem onClick={handleClickClose}>Manage</MenuItem> 
                                        </Menu>
                                    </IconButton>}
                                classes={{ action: classes.headerStyle }} // "classes" allow you to change props on title/action/avatar... with makeStyles 
                            >
                            </CardHeader>
                        </Paper>
                    </Grid>
                    <Grid item lg={4}>
                        <Paper elevation={3} >
                            <CardHeader
                                className={classes.headerStyle}
                                avatar={
                                    <Avatar>
                                        <FaUserCircle />
                                    </Avatar>}
                                title="Name of your CMS"
                                subheader="https://mycms.com"
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon onClick={handleClickOpen} />
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={open}
                                            keepMounted
                                            open={Boolean(open)}
                                            onClose={handleClickClose}
                                        >
                                            <MenuItem onClick={handleClickClose}>Manage</MenuItem> 
                                        </Menu>
                                    </IconButton>}
                                classes={{ action: classes.headerStyle }} // "classes" allow you to change props on title/action/avatar... with makeStyles 
                            >
                            </CardHeader>
                        </Paper>
                    </Grid>
                    <Grid item lg={4}>
                        <Paper elevation={3} >
                            <CardHeader
                                className={classes.headerStyle}
                                avatar={
                                    <Avatar>
                                        <FaUserCircle />
                                    </Avatar>}
                                title="Name of your CMS"
                                subheader="https://mycms.com"
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon onClick={handleClickOpen} />
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={open}
                                            keepMounted
                                            open={Boolean(open)}
                                            onClose={handleClickClose}
                                        >
                                            <MenuItem onClick={handleClickClose}>Manage</MenuItem> 
                                        </Menu>
                                    </IconButton>}
                                classes={{ action: classes.headerStyle }} // "classes" allow you to change props on title/action/avatar... with makeStyles 
                            >
                            </CardHeader>
                        </Paper>
                    </Grid>
                    <Grid item lg={4}>
                        <Paper elevation={3} >
                            <CardHeader
                                className={classes.headerStyle}
                                avatar={
                                    <Avatar>
                                        <FaUserCircle />
                                    </Avatar>}
                                title="Name of your CMS"
                                subheader="https://mycms.com"
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon onClick={handleClickOpen} />
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={open}
                                            keepMounted
                                            open={Boolean(open)}
                                            onClose={handleClickClose}
                                        >
                                            <MenuItem onClick={handleClickClose}>Manage</MenuItem> 
                                        </Menu>
                                    </IconButton>}
                                classes={{ action: classes.headerStyle }} // "classes" allow you to change props on title/action/avatar... with makeStyles 
                            >
                            </CardHeader>
                        </Paper>
                    </Grid>
                    <Grid item lg={4}>
                        <Paper elevation={3} >
                            <CardHeader
                                className={classes.headerStyle}
                                avatar={
                                    <Avatar>
                                        <FaUserCircle />
                                    </Avatar>}
                                title="Name of your CMS"
                                subheader="https://mycms.com"
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon onClick={handleClickOpen} />
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={open}
                                            keepMounted
                                            open={Boolean(open)}
                                            onClose={handleClickClose}
                                        >
                                            <MenuItem onClick={handleClickClose}>Manage</MenuItem> 
                                        </Menu>
                                    </IconButton>}
                                classes={{ action: classes.headerStyle }} // "classes" allow you to change props on title/action/avatar... with makeStyles 
                            >
                            </CardHeader>
                        </Paper>
                    </Grid>
                    <Grid item lg={4}>
                        <Paper elevation={3} >
                            <CardHeader
                                className={classes.headerStyle}
                                avatar={
                                    <Avatar>
                                        <FaUserCircle />
                                    </Avatar>}
                                title="Name of your CMS"
                                subheader="https://mycms.com"
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon onClick={handleClickOpen} />
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={open}
                                            keepMounted
                                            open={Boolean(open)}
                                            onClose={handleClickClose}
                                        >
                                            <MenuItem onClick={handleClickClose}>Manage</MenuItem> 
                                        </Menu>
                                    </IconButton>}
                                classes={{ action: classes.headerStyle }} // "classes" allow you to change props on title/action/avatar... with makeStyles 
                            >
                            </CardHeader>
                        </Paper>
                    </Grid>
                    <Grid item lg={4}>
                        <Paper elevation={3} >
                            <CardHeader
                                className={classes.headerStyle}
                                avatar={
                                    <Avatar>
                                        <FaUserCircle />
                                    </Avatar>}
                                title="Name of your CMS"
                                subheader="https://mycms.com"
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon onClick={handleClickOpen} />
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={open}
                                            keepMounted
                                            open={Boolean(open)}
                                            onClose={handleClickClose}
                                        >
                                            <MenuItem onClick={handleClickClose}>Manage</MenuItem> 
                                        </Menu>
                                    </IconButton>}
                                classes={{ action: classes.headerStyle }} // "classes" allow you to change props on title/action/avatar... with makeStyles 
                            >
                            </CardHeader>
                        </Paper>
                    </Grid>
                    <Grid item lg={4}>
                        <Paper elevation={3} >
                            <CardHeader
                                className={classes.headerStyle}
                                avatar={
                                    <Avatar>
                                        <FaUserCircle />
                                    </Avatar>}
                                title="Name of your CMS"
                                subheader="https://mycms.com"
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon onClick={handleClickOpen} />
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={open}
                                            keepMounted
                                            open={Boolean(open)}
                                            onClose={handleClickClose}
                                        >
                                            <MenuItem onClick={handleClickClose}>Manage</MenuItem> 
                                        </Menu>
                                    </IconButton>}
                                classes={{ action: classes.headerStyle }} // "classes" allow you to change props on title/action/avatar... with makeStyles 
                            >
                            </CardHeader>
                        </Paper>
                    </Grid>
                </Grid>
    )
}
