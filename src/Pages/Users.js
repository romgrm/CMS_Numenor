import React from 'react';
import { Card, CardContent, Typography, Container } from '@material-ui/core';
import ListUsers from '../Components/List/ListUsers';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
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
        <Card className={classes.card}>
            <CardContent >
                <Container className={classes.title}>
                    <Typography variant="h6" className={classes.typo} >List of Users</Typography>
                    <Typography  >You can find below all users who have the rights to modify the CMS.</Typography>
                </Container>
                <ListUsers />
            </CardContent>
        </Card>
    )
}