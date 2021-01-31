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
import ViewButton from '../Modales/ModaleUpdateArticle';

const columns = [
    { id: 'name', label: 'UserName' },
    {id: 'rights', label:'Rights'},
    { id: 'actions', label: 'Actions' },
];

 function createData(name, rights, actions) {
    return {name, rights, actions };
    }

const rows = [
    createData('First User', 'read/write', <ViewButton /> ),
    createData('Second User', 'read/write', <ViewButton/>),
    createData('Third User', 'read', <ViewButton/>)
];

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
}));



export default function ListTemplates() {
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
                <Paper >
                    <TableContainer>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead style={{}}> 
                                <TableRow>
                                    {columns.map((column) => {
                                        if (column.id==='actions') {   
                                            return <TableCell key={column.id} align="right" style={{ minWidth: column.minWidth }}>{column.label}</TableCell> 
                                        }else{
                                            return <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>{column.label}</TableCell>;
                                        }
                                    })}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => { 
                                    return(
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