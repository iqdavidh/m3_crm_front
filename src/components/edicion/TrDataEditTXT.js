import React, { Component } from 'react';

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
          className="form-control-sm"
          value={this.props.valor}
        />
      );
    }

    return (
      <tr>
        <th>{this.props.label}</th>
        <td>{componente}</td>
      </tr>
    );
  }
}

export default TrDataEditTXT;
