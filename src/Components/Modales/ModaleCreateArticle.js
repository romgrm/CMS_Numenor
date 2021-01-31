import React from 'react';
import { Container, Button} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { Editor } from "@tinymce/tinymce-react";


const useStyles = makeStyles((theme) => ({
    title: {
        float: 'right',
        padding: 0,
        margin: 0,
        width: 'auto'
    },
    typo: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'red',
        color: 'white'
    },
    card: {
        width: 1000,
    },
    modules: {
        display: 'flex',
    }

}))

const data = [
    {
        value: 'English'
    },
    {
        value: 'French'
    }
]

export default function Test() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <Container className={classes.title}>
            <Button onClick={handleClickOpen} variant="contained" color="primary" endIcon={<AddIcon />} style={{ float: 'right' }} >Create</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.root}>
                <DialogTitle id="form-dialog-title">Create an article template</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You are about to create an article template. They are used to accelerate the creation of article that have common layout.
                </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="outlined-basic"
                        label="Name*"
                        type="text"
                        variant="outlined"
                        //placeholder="Enter the title of your new article"
                        fullWidth
                        helperText="The name will help to identify the template"

                    />
                    <Editor
                        apiKey="xxjl9f0c3kj32tls4w26aauf5jn23awd6gfmlc1wmpo7w7uc"
                        plugins="wordcount"
                    />

                </DialogContent>
                <DialogActions >
                    <Button onClick={handleClose} style={{ marginLeft: 0 }}>
                        Close
                </Button>
                    <Button onClick={handleClose} color="primary" style={{ marginLeft: 0 }} disabled variant="contained">
                        Create
                </Button>

                </DialogActions>
            </Dialog>
        </Container>
    )
}