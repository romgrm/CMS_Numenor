import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, TextField, DialogTitle, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 20
    },
    typo: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        color: 'white'
    },
    card: {
        width: 1000,
    }
}))

export default function ModaleCreateTags() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button onClick={handleClickOpen} style={{ float: 'right' }} color="primary" variant="contained" endIcon={<AddIcon />} size="small">Create</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.root}>
                <DialogTitle id="form-dialog-title">Tags Creation</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="outlined-basic"
                        label="Title"
                        type="text"
                        variant="outlined"
                        helperText="Name of tag in the selected langage."
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                            </Button>
                    <Button onClick={handleClose} color="primary" variant="contained">
                        Create
                            </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
