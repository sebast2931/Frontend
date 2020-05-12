import React from "react";
//import { getData } from "data";
import Table from "./listTable";
import  Form  from "./form";
import {stateImputs}  from "./validate";







const Acti = () => {
    const formik= stateImputs();
   
 return(
 <>
 <Table/>
 <Form formik ={formik}/>

 </>)
};
export default Acti;
