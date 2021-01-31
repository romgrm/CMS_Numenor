import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, TextField } from '@material-ui/core';
import MainCard from './ContentContent/MainCard';
import CoverCard from './ContentContent/CoverCard';
import { Editor } from "@tinymce/tinymce-react";




const useStyles = makeStyles({
    containerOne: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 20,
        margin: 0,
        padding: 0
    },
    containerTwo: {
        marginBottom: 20,
        marginTop:20, 
        margin: 0,
        padding: 0
    },
    containerThree: {
        marginBottom: 20,
        marginTop:20, 
        margin: 0,
        padding: 0
    },
    button: {
        float: 'right',
        marginBottom: 20
    },


});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Container>
            <Container className={classes.containerOne}>
                <MainCard />
                <CoverCard />
            </Container>
            <Button className={classes.button} variant="contained" disabled>Save</Button>
            <Container className={classes.containerTwo}>
                <TextField
                    fullWidth
                    margin="dense"
                    defaultValue="Default Value"
                    id="outlined-basic"
                    label="Title"
                    type="text"
                    variant="outlined"
                ></TextField>
                <TextField
                    fullWidth
                    margin="dense"
                    defaultValue="Default Value"
                    id="outlined-basic"
                    label="Short Contents"
                    type="text"
                    variant="outlined"
                ></TextField>
            </Container>
            <Container className={classes.containerThree}>
                <Editor
                    init={{
                        width: "100%",
                    }}
                    apiKey="xxjl9f0c3kj32tls4w26aauf5jn23awd6gfmlc1wmpo7w7uc"
                    plugins="wordcount"
                />
            </Container>
        </Container>
    );
}