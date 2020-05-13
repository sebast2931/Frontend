import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables(props) {
   
  const classes = useStyles();

  const { data } = props;
 
  return (
    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">Descripcion</StyledTableCell>
            <StyledTableCell align="center">Precio Base</StyledTableCell>
            <StyledTableCell align="center">Inventario</StyledTableCell>
            <StyledTableCell align="center">Estado</StyledTableCell>
            <StyledTableCell align="center">Tasa Impuesto</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, key) => (
            <StyledTableRow key={key}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.ID}
              </StyledTableCell>
              <StyledTableCell align="center">{row.nombre}</StyledTableCell>
              <StyledTableCell align="center">{row.descripcion}</StyledTableCell>
              <StyledTableCell align="center">{row.preciobase}</StyledTableCell>
              <StyledTableCell align="center">{row.inventario}</StyledTableCell>
              <StyledTableCell align="center">{row.estado}</StyledTableCell>
              <StyledTableCell align="center">{row.tasa_de_impuestos}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
