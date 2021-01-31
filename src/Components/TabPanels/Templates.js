import React from 'react';
import { Typography, Container } from '@material-ui/core';
import TemplatesContent from '../TabPanels/TemplatesContent/ListTemplatesContent'
import { makeStyles } from '@material-ui/core/styles';
import ModaleCreateArticle from '../Modales/ModaleCreateArticle';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 0,
        margin: 0
    },
    typo: {
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    }
}))


export default function AddTemplate() {
    const classes = useStyles();
   
    return (
        <Container>

            <Container className={classes.container}>
                <Typography variant="h6" className={classes.typo} >Templates</Typography>
                <ModaleCreateArticle/>
            </Container>
            <TemplatesContent/>
        </Container>
    )
}