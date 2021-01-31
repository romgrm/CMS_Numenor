import React from 'react';
import { Card, CardContent, Typography, Container, Button, MenuItem } from '@material-ui/core';
import Tab from '../Components/Utils/Tab'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ModaleAddLangage from '../Components/Modales/ModaleAddLangage'

const useStyles = makeStyles((theme) => ({
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 20
    },
    subtitle: {
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
    },
    modules: { 
        display: 'flex',
    },
}))

const data = [
    {
        value: 'English'
    },
    {
        value: 'French'
    }
]


export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card className={classes.card}>
            <CardContent >
                <Container className={classes.title}>
                    <Typography variant="h6" className={classes.typo}>Article Edit</Typography>
                    <ModaleAddLangage/>
                </Container>
                <Container className={classes.subtitle}>
                    <Typography > Edit your article / Manage your tags & visibility.</Typography>
                    <Tab/>
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
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={handleClose} color="primary">
                                Create
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Container>
                <Container className={classes.modules}>
                    {/* <ListOfArticles /> */}
                </Container>
            </CardContent>
        </Card>


    )
}