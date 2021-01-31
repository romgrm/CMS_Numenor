import React from 'react';
import { Typography, TextField, Button, Card, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    rootStyles: {
        height: '100vh',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    contentStyles: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    typographyStyles: {
        fontSize: 50,
        padding: 20,
        textAlign: 'center'

    },
    formStyles: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            display: 'inline-block'
        },
    },
    inputStyles: {
        marginRight: 10,
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            marginBottom: 10,
            marginRight: 'auto'
        },
    },
    buttonStyles: {
        margin: 10,
        backgroundColor: '#3f51b5',
        color: 'white'
    },

}));

export default function Login() {
    const classes = useStyles();
    return (
        <Grid
            container
            className={classes.rootStyles}>
            <Grid item lg={6} md={6}>
                <Card>
                    <CardContent className={classes.contentStyles}>
                        <Typography className={classes.typographyStyles} variant="h3" color="secondary">Create your own CMS</Typography>
                        <form className={classes.formStyles} noValidate autoComplete="off">
                            <TextField className={classes.inputStyles} id="outlined-basic" label="Name" variant="outlined" />
                            <TextField className={classes.inputStyles} id="outlined-basic" label="First Name" variant="outlined" />
                        </form>
                        <Link to="/home" style={{ textDecoration: 'none' }}>
                            <Button className={classes.buttonStyles} variant="outlined">Click me</Button>
                        </Link>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
