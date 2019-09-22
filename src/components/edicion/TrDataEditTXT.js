import React, { Component } from 'react';
import './TrDataEditTXT.css';
import ATrDataEdit from './ATrDataEdit';

class TrDataEditTXT extends ATrDataEdit {
  onTextoChange(event) {
    const valor = event.target.value;
    const isValid = this.getIsValid(valor);

    this.setState({ valorEdit: valor });

    this.props.observerData.onValorChange(
      this.getCampoFromDataSource(),
      valor,
      isValid
    );
  }

  getIsValid(valor) {
    const validacion = this.props.validacion;

    if (!validacion.isRequired) {
      return true;
    }
    return valor !== '';
  }

  getComponentEdit() {
    let valor = this.state.valorEdit;

    return (
      <input
        type="text"
        className="form-control-sm"
        onChange={event => this.onTextoChange(event)}
        value={valor}
      />
    );
  }

  getComponentRead() {
    return this.getValorFromDataSource();
  }
}

export default TrDataEditTXT;
