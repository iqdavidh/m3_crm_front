import React, { Component } from 'react';
import './TrDataEditTXT.css';

class TrDataEditTXT extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valorEdit: props.valorEdit
    };
  }

  onTextoChange(event) {
    console.log(event.target.value);
    this.setState({ valorEdit: event.target.value });
  }

  render() {
    const validacion = this.props.validacion;

    const isEdit = this.props.isEdit;

    let componente = this.props.valor;

    let cssError = '';

    if (isEdit) {
      if (validacion.isRequired && this.state.valorEdit === '') {
        cssError = 'error';
      }

      componente = (
        <input
          type="text"
          className="form-control-sm"
          onChange={event => this.onTextoChange(event)}
          value={this.state.valorEdit}
        />
      );
    }

    const className = `trDataEdit ${cssError}`;

    return (
      <tr className={className}>
        <th>{this.props.label}</th>
        <td>{componente}</td>
      </tr>
    );
  }
}

export default TrDataEditTXT;
