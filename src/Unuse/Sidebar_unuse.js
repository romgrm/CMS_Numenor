import React from 'react';
import {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { IoMdPricetags } from 'react-icons/io';
import { IoSettingsSharp } from 'react-icons/io5';
import { HiHome } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { RiArticleFill } from 'react-icons/ri';
import { GrTemplate } from 'react-icons/gr';
import { ImUsers } from 'react-icons/im';
import { ImUserCheck } from 'react-icons/im'; 
import { FiArrowLeftCircle } from 'react-icons/fi';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    /** CHANGE LOGOS */
    const switchedLogo = (text) => {
        switch (text) {
            case 'Home':
                return <HiHome />;
            case 'Dashboard':
                return <MdDashboard />;
            case 'List Articles':
                return <RiArticleFill />;
            case 'Add Template':
                return <GrTemplate />;
            case 'Tags':
                return <IoMdPricetags/>
            case 'Settings':
                return <IoSettingsSharp/>  
            case 'Users': 
                return <ImUsers/>
            case 'Authors': 
                return <ImUserCheck/>              
            default:
                return null;
        }
    }

    /** CHANGE TEXT */
    const switchedText = (text) => {
        switch (text) {
            case 'List Articles':
                return <p>Articles</p>;
            case 'Add Template':
                return <p>Add Template</p>;
            case 'Tags': 
                return <p>Others</p>        
            default:
                return null;
        }
    }

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {/* FIRST LIST */}
            <List>
                {['Home', 'Dashboard', 'List Articles', 'Add Template'].map((text, index) => (
                        
                    <ListItem button divider key={index} style={{display: 'inline-block'}}>
                        <ListItemText secondary={switchedText(text)}/>
                        <ListItemIcon >{switchedLogo(text)}</ListItemIcon>
                        <ListItemText primary={text} style={{display: 'inline-block'}}/>
                    </ListItem>
                ))}
            </List>

            {/* SECOND LIST */}
            <List style={{padding: 0}}>
                {['Tags', 'Settings', 'Users', 'Authors'].map((text, index) => (
                    <ListItem button key={index} style={{display: 'inline-block', paddingTop: 0}}>
                        <ListItemText secondary={switchedText(text)}/>
                        <ListItemIcon>{switchedLogo(text)}</ListItemIcon>
                        <ListItemText primary={text} style={{display:'inline-block'}}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><FiArrowLeftCircle style={{color: 'white', width:20, height: 20}}/></Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}