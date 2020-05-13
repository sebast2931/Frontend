//import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

const initialValues ={
    name: "",
    descripcion: "",
    precioBase: "",
    inventario: "",
    estado: "",
    tasaImpuesto: "",
}

const yup={


    name: Yup.string()
    .max(100, "El campo debe tener maximo 100 caracteres")
    .required("El campo name es obligatorio"),
  descripcion: Yup.string()
    .max(280, "El campo debe tener maximo 280 caracteres")
    .required("El campo es obligatorio"),
  precioBase: Yup.number()
    .min(1, "El campo debe ser mayor 0")
    .required("El campo es obligatorio"),
  inventario: Yup.number()
    .min(1, "El numero debe ser mayor a 1")
    .integer("El valor debe ser un valor numerico")
    .required("El campo es obligatorio"),
  estado: Yup.string()
  .required("El campo es obligatorio"),
  tasaImpuesto: Yup.number()
    .min(0, "El numero debe ser mayor o igual 0")
    .max(1, "El numero debe ser menor o igual 1")
    .required("El campo es obligatorio"),

}

export const stateImputs =()=>{
    //eslint-disable-next-line react-hooks/rules-of-hooks 
    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object(yup),
        onSubmit: (values) => {
          console.log(values, null, 2);
        },
      });
return formik;
}

export default stateImputs;