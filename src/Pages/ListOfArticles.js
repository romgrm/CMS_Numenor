import React from 'react';
import { Card, CardContent, Typography, Container, Button, MenuItem } from '@material-ui/core';
import ListArticles from '../Components/List/ListArticles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";

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

export default function ListOfArticles() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Card className={classes.card}>
            <CardContent >
                <Container className={classes.title}>
                    <Typography variant="h6" className={classes.typo} >List of Articles</Typography>
                    <Button variant="outlined" onClick={handleClickOpen} className={classes.button} endIcon={<AddIcon />} >Create</Button>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.root}>
                        <DialogTitle id="form-dialog-title">Article Creation</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Create a new article and you will be redirected to redaction page.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="outlined-basic"
                                label="Title of Article"
                                type="text"
                                variant="outlined"
                                placeholder="Enter the title of your new article"

                            />
                            <TextField
                                id="outlined-basic"
                                select
                                margin="dense"
                                type="text"
                                label="Select Langage"
                                //value={data}
                                //onChange={handleChange}

                                helperText="Please select your currency"
                                variant="outlined"
                            //placeholder="Enter the title of your new article"
                            >
                                {data.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>
                                        {item.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">Cancel</Button>
                            <Link to="/createArticle" style={{ textDecoration: 'none'}}>
                                <Button onClick={handleClose} color="primary">Create</Button>
                            </Link>
                        </DialogActions>
                    </Dialog>
                </Container>
                <ListArticles />
            </CardContent>
        </Card>
    )
}