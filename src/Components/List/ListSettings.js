import React from 'react';
import { TextField, Paper, Button, Typography, Box, FormControl } from '@material-ui/core';
import {makeStyles, withStyles} from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    typo: {
        color: theme.palette.primary.main,
        fontWeight: 'bold'
    },
    paper: {

    },
    form:{
        padding: 10
    }
}))

// const FormStyled = withStyles({
//     root:{
//         margin: 0
//     } 
// })(FormControl);

export default function ListSettings() {
    const classes= useStyles();
    return (
        <Box width="50%">

        <Paper  >
            <FormControl fullWidth className={classes.form}>
            <Typography variant="h6" className={classes.typo}>cms_name_title</Typography>
            <TextField
            defaultValue="Default Value"
            margin="dense"
            id="outlined-basic"
            label="Cms Name"
            type="text"
            variant="outlined"
            ></TextField>
            <Button variant="contained" color="primary" endIcon={<AddIcon/>}>Save</Button>
            </FormControl>
        </Paper>
            </Box>
    )
}
