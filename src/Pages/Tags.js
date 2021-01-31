import React from 'react';
import { Typography, Card, CardContent, Container, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import ListTags from '../Components/List/ListTags';
import Delete from '../Components/Modales/ModaleDeleteTags'

const useStyles = makeStyles((theme) => ({
    title: {
        padding: 20,
    },
    typo: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    },
    card: {
        width: 1000,
    },
}))

export default function Tags() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent >
                <Container className={classes.title}>
                    <Typography variant="h6" className={classes.typo}>List of tags</Typography>
                    <Typography style={{marginBottom: 20}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                    <ListTags />
                </Container>
                <Delete />
            </CardContent>
        </Card>

    )
}
