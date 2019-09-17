import React, { Component } from 'react';
import './TrDataEditTXT.css';

class TrDataEditTXT extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isEdit = this.props.isEdit;

    let componente = this.props.valor;

    if (isEdit) {
      componente = (
        <input
          type="text"
          className="form-control-sm "
          value={this.props.valor}
        />
      );
    }

    return (
      <tr className="trDataEdit">
        <th>{this.props.label}</th>
        <td>{componente}</td>
      </tr>
    );
  }
}

export default TrDataEditTXT;
