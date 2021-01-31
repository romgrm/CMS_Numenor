import React from 'react'
import { Container, Typography, Box, Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ModaleAddImage from '../Modales/ModaleAddImage'


const useStyle = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 0,
        padding: 0,
    },
    typo: {
        fontWeight: 'bold'
    },
    subtitle: {
        marginTop: 20
    },
    media:{
        height: 150,
        width: 150,
        marginTop: 20
    }
})
export default function Gallery() {
    const classes = useStyle();
    return (
        <Container>
            <Container className={classes.container}>
                <Typography variant="h6" color="primary" className={classes.typo}>Gallery</Typography>
                <ModaleAddImage />
            </Container>
            <Typography variant="body2" className={classes.subtitle}>Here you can manage all your images you can insert on the article.</Typography>
            <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&w=200&q=80"
                title="Random Image"
                component="div"
                />
        </Container>
    )
}
