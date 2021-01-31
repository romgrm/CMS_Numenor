import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
    { id: 'title', label: 'Title', minWidth: 100 },
    { id: 'langage', label: 'Langage' },
];

function createData(title, langage) {
    return { title, langage };
}

const rows = [
    createData('First article', <img src="https://www.flaticon.com/svg/static/icons/svg/197/197484.svg" width="40" height="40" style={{float:"right"}} />),
    createData('Second article', <img src="https://www.flaticon.com/svg/static/icons/svg/197/197484.svg" width="40" height="40" style={{float:"right"}}/>),
    createData('Third article', <img src="https://www.flaticon.com/svg/static/icons/svg/197/197560.svg" width="40" height="40" style={{float:"right"}}/>)
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
    },
    container: {
        maxHeight: 440,
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        }
    },
}));



export default function ListArticles() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => {
                                        if (column.id==='title') {    
                                            return <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>{column.label}</TableCell>
                                            }else{
                                                return <TableCell key={column.id} align="right" style={{ minWidth: column.minWidth }}>{column.label}</TableCell>;
                                            }
                                        })}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
    )
}
