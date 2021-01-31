import React from 'react';
import { Button } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 20,
        marginBottom: 20,
        "& > *": {
            marginRight: 15,
            marginTop: 15
        }
    }
}))
const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup row className={classes.root}>
            <Button variant="outlined">
                <Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" color="primary" />
      Movies
      </Button>
            <Button variant="outlined">
                <Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />
      TableTop
      </Button>
            <Button variant="outlined">
                <Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" color="primary" />
      Kickstarter
      </Button>
            <Button variant="outlined">
                <Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD" color="primary" />
      Game
      </Button>
            <Button variant="outlined">
                <Checkbox checked={state.checkedE} onChange={handleChange} name="checkedE" color="primary" />
      Books
      </Button>
        </FormGroup>
    );
}