import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Box, Typography, Container } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    root: {
        float: 'right',
        color: 'white',

    },
    box: {
        height: 50,
    },
    container: {
        display: 'inline-block',
        float: 'right',

    }
}));

export default function ImageAvatars() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [menu, setMenu] = React.useState(null);

    const handleClickLangage = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseLangage = () => {
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setMenu(event.currentTarget);
    };

    const handleClose = () => {
        setMenu(null);
    };

    return (
        <Box className={classes.box} width="100%">
            <Container className={classes.container}>
                <Button onClick={handleClick} className={classes.root}>
                    Account
                <Avatar alt="User" src="data:image/jpeg;base64,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" style={{ marginLeft: 5 }} />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={menu}
                    keepMounted
                    open={Boolean(menu)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <AccountCircleIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography >Profile</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <ExitToAppIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography>Logout</Typography>
                    </MenuItem>

                </Menu>

                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickLangage} className={classes.root} style={{ marginTop: 8 }} >
                    Select Langage
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleCloseLangage}
                >
                    <MenuItem onClick={handleCloseLangage}>
                        <ListItemIcon>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/197/197484.svg" width="20" height="20" />
                        </ListItemIcon>
                        <Typography>English</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseLangage}>
                        <ListItemIcon>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/197/197560.svg" width="20" height="20" />
                        </ListItemIcon>
                        <Typography>French</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseLangage}>
                        <ListItemIcon>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/197/197604.svg" width="20" height="20" />
                        </ListItemIcon>
                        <Typography>Japanese</Typography>
                    </MenuItem>
                </Menu>
            </Container>
        </Box>


    );
}
