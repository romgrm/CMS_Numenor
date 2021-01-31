import Login from './Pages/Login';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard'
import Sidebar from './Components/Utils/Sidebar';
import ListOfArticles from './Pages/ListOfArticles';
import AddTemplate from './Pages/AddTemplate';
import Tags from './Pages/Tags';
import Settings from './Pages/Settings';
import Authors from './Pages/Authors';
import Users from './Pages/Users';
import CreateArticle from './Pages/CreateArticle'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}))
function App() {
  const classes = useStyles();
  return (
    <Router >
      <Grid container spacing={3} style={{ paddingTop: 100 }}>
        <Grid item item lg={2} md={2} sm={2} xs={1}  ></Grid>
        <Grid item item lg={8} md={8} sm={8} xs={10} >
          <Switch>
            <div className={classes.root}>
              <Route path={["/home", "/dashboard", "/articles", "/templates", "/tags", "/settings", "/users", "/authors", "/createArticle"]} component={Sidebar} />
              <Route path="/home" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/articles" component={ListOfArticles} />
              <Route path="/templates" component={AddTemplate} />
              <Route path="/tags" component={Tags}/>
              <Route path="/settings" component={Settings}/>
              <Route path="/users" component={Users}/>
              <Route path="/authors" component={Authors}/>
              <Route path="/createArticle" component={CreateArticle}/>
            </div>
          </Switch>
        </Grid>
        <Grid item item lg={2} md={2} sm={2} xs={1} ></Grid>
      </Grid>
      <Route exact path="/" component={Login} />
    </Router >
  );
}

export default App;
