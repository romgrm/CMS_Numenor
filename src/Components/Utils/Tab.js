import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ContentPanel from '../TabPanels/Content';
import VisibilityPanel from '../TabPanels/Visibility';
import GalleryPanel from '../TabPanels/Gallery'; 
import TemplatePanel from '../TabPanels/Templates'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 30
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* <AppBar position="static"> */}
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="primary"
        textColor="primary">
          <Tab label="Content" {...a11yProps(0)} />
          <Tab label="Visibility" {...a11yProps(1)} />
          <Tab label="Gallery" {...a11yProps(2)} />
          <Tab label="Templates" {...a11yProps(3)} />
        </Tabs>
      {/* </AppBar> */}
      <TabPanel value={value} index={0}>
        <ContentPanel/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VisibilityPanel/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GalleryPanel/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TemplatePanel/>
      </TabPanel>
    </div>
  );
}