import React from 'react';
import { Card, CardContent, Typography, Container, Button, MenuItem } from '@material-ui/core';
import ListAuthors from '../Components/List/ListAuthors';
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
                    <Typography variant="h6" className={classes.typo} >List of Authors</Typography>
                    <Typography  >You can find below all authors who wrote an article in this CMS, and some related stats.</Typography>
                </Container>
                <ListAuthors />
            </CardContent>
        </Card>
    )
}