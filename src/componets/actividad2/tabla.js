import React from 'react'

const Table = ({data}) =>(

    <table className="table thead-dark">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Precio Base</th>
          <th scope="col">Inventario</th>
          <th scope="col">Estado</th>
          <th scope="col">Tasa Impuesto</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, key) => (
          <tr key={key}>
            <th scope="row">{item.ID}</th>
            <td>{item.nombre}</td>
            <td>{item.descripcion}</td>
            <td>{item.preciobase}</td>
            <td>{item.inventario}</td>
            <td>{item.estado}</td>
            <td>{item.tasa_de_impuestos}</td>
          </tr>
        ))}
      </tbody>
    </table>

 
);

export default Table;