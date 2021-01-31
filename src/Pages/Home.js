import React from 'react'
import ListCms from '../Components/List/ListCms'
import { Typography, Card, CardContent, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import ModaleCreateCms from '../Components/Modales/ModaleCreateCms'
import Users from '../Components/users'

const useStyles = makeStyles((theme) => ({
    title: {
        padding: 20,
        display: 'flex',
        justifyContent: 'space-between',
    },
    typo: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    },
    card: {
        width: 1000,
    }
}))

export default function Home() {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent >
                <Container className={classes.title}>
                    <Typography variant="h6" className={classes.typo}>List of your CMS</Typography>
                    <ModaleCreateCms />
                </Container>
                <Container>
                    <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                </Container>
            </CardContent>
            <ListCms />
            <Users/>
        </Card>

    )
}
