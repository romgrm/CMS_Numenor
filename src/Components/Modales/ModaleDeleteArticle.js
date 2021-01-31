import React from 'react';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ModaleDeleteArticle() {
    const [openDelete, setOpenDelete] = React.useState(false)

    const handleDeleteOpen = () => {
        setOpenDelete(true)
    }

    const handleClose = () => {
        setOpenDelete(false);
    };
    return (
        <>
            <Button onClick={handleDeleteOpen} color="secondary" startIcon={<DeleteIcon />}>Delete</Button>
            <Dialog open={openDelete} onClose={handleClose} aria-labelledby="form-dialog-title" >
                <DialogTitle id="form-dialog-title">Are you sure you want to delete this article template ?</DialogTitle>
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
