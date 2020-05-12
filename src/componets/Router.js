import React from 'react';
import Form from './actividad1';
import ListP from './actividad2';
import {Router} from '@reach/router'
import CustomizedActividad from './actividad3';




const Route = () => (
    
        <Router>
          <Form path = "/Actividad1"/>
          <ListP path = "/Actividad2"/>
          <CustomizedActividad path ="/Actividad3"/>

        </Router>
    
)

export default Route;