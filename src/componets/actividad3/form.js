import React from "react";
import { TextField } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from "@material-ui/core/styles";
//import formik  from "./validate";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));




const Form2 = ({formik}) => {


    

  const classes = useStyles();
  return (
    <form className={classes.root} 
    noValidate 
    autoComplete="off"
    onSubmit={formik.handleSubmit}>


      <TextField id="outlined-basic" 
      label="Nombre" 
      type="text" 
      name="name"
      variant="outlined" 
      onChange={formik.handleChange} 
      value={formik.values.name}
      helperText={formik.errors.name}
      error={Boolean(formik.errors.name)}
      />

      <TextField id="outlined-basic" 
      multiline={true}
      rowsMax={5}
      label="Descripcion" 
      type="text" 
      name="descripcion"
      variant="outlined" 
      onChange={formik.handleChange} 
      value={formik.values.descripcion}
      helperText={formik.errors.descripcion}
      error={Boolean(formik.errors.descripcion)}
      />

      <TextField id="outlined-basic" 
      label="Precio Base" 
      type="text" 
      name="precioBase"
      variant="outlined" 
      onChange={formik.handleChange} 
      value={formik.values.precioBase}
      helperText={formik.errors.precioBase}
      error={Boolean(formik.errors.precioBase)}
      />

      <TextField id="outlined-basic" 
      label="Inventario" 
      type="text" 
      name="inventario"
      variant="outlined" 
      onChange={formik.handleChange} 
      value={formik.values.inventario}
      helperText={formik.errors.inventario}
      error={Boolean(formik.errors.inventario)}
      />


    <InputLabel id="demo-simple-select-label">Estado</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="estado"
          value={formik.values.estado}
          onChange={formik.handleChange}
        >
          <MenuItem value={"PUBLICADO"}>PUBLICADO</MenuItem>
          <MenuItem value={"BORRADO"}>BORRADO</MenuItem>
        </Select>   

    

      <TextField id="outlined-basic" 
      label="Tasa Impuesto" 
      type="text" 
      name="tasaImpuesto"
      variant="outlined" 
      onChange={formik.handleChange} 
      value={formik.values.tasaImpuesto}
      helperText={formik.errors.tasaImpuesto}
      error={Boolean(formik.errors.tasaImpuesto)}
      />


      <button type="submit" variant="containd" color="primary">Enviar</button>
    </form>
  );
};

export default Form2;
