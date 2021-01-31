import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, TextField, DialogTitle, Button, MenuItem } from '@material-ui/core';
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

const data = [
    {
        value: 'English'
    },
    {
        value: 'French'
    }
]

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
            <Button variant="contained" onClick={handleClickOpen} color="primary" endIcon={<AddIcon />} >Add Langage</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.root}>
                <DialogTitle id="form-dialog-title">Choose Langage</DialogTitle>
                <DialogContent>
                <TextField
                                id="outlined-basic"
                                select
                                margin="dense"
                                type="text"
                                label="Select Langage"
                                //value={data}
                                //onChange={handleChange}
                                helperText="Please select your langage"
                                variant="outlined">
                                {data.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>
                                        {item.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                            </Button>
                    <Button onClick={handleClose} color="primary" variant="contained">
                        Add
                            </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}