import React, { Component } from "react";

class Form extends Component {
  state = {
    form: {
      name: "",
      description: "",
      basePrice: "",
      tasaImpuesto: "",
      estado: "",
      invetario: "",
    },
  };

  handleOnchege = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      form: { ...this.state.fom, [name]: value },
    });
  };

  render() {
    return (
      <form>
        <div className="form-group col-md-6">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={this.handleOnchege}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="description">Descripcion</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={this.handleOnchege}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="basePrice">Precio Base</label>
          <input
            type="text"
            className="form-control"
            id="basePrice"
            name="basePrice"
            onChange={this.handleOnchege}
          />
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="tasaImpuesto">Tasa Impuesto</label>
            <input
              type="text"
              className="form-control"
              id="tasaImpuesto"
              name="tasaImpuesto"
              onChange={this.handleOnchege}
            />
          </div>
</div>
          <div className="form-group col-md-6">
            <label htmlFor="estado">Estado</label>
            <input
              type="text"
              className="form-control"
              id="estado"
              name="estado"
              onChange={this.handleOnchege}
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="invetario">Inventario</label>
            <input
              type="text"
              className="form-control"
              id="invetario"
              name="invetario"
              onChange={this.handleOnchege}
            />
          </div>
        <div className="form-group col-md-6">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
