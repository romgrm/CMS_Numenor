import React from 'react';
import { Container, Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    title: {
        float:'right',
    },
    typo: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        float: 'right'
    },
    card: {
        width: 1000,
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

export default function AddTemplate() {
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
                    <Button variant="outlined" onClick={handleClickOpen} className={classes.button} endIcon={<AddIcon/>} >Create</Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.root}>
                        <DialogTitle id="form-dialog-title">CMS creation</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Create a new cms.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="outlined-basic"
                                label="Name of your CMS"
                                type="text"
                                variant="outlined"
                                placeholder="Enter the title of your new article"

                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleClose} color="primary">
                                Create
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Container>
    )
}