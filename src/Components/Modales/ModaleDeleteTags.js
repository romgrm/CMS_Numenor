import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    button: {
        float: 'right',
        margin: 20
    }
}))

export default function ModaleDeleteArticle() {
    const classes = useStyles();
    const [openDelete, setOpenDelete] = React.useState(false)

    const handleDeleteOpen = () => {
        setOpenDelete(true)
    }

    const handleClose = () => {
        setOpenDelete(false);
    };
    return (
        <>
            <Button onClick={handleDeleteOpen} color="primary" variant="contained" className={classes.button}>Delete</Button>
            <Dialog open={openDelete} onClose={handleClose} aria-labelledby="form-dialog-title" >
                <DialogTitle id="form-dialog-title">Are you sure you want to delete this tags ?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Once confirmed you will not be able to cancel this action.
                </DialogContentText>
                   Are you sure you want to do it ?
                </DialogContent>
                <DialogActions >
                    <Button onClick={handleClose} variant="contained" color="primary">
                        Back
                    </Button>
                    <Button onClick={handleClose} color="secondary" endIcon={<DeleteIcon />} >
                        Delete
                            </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}