import React, { Component } from 'react';
import './TrDataEditTXT.css';

class TrDataEditTXT extends Component {
  constructor(props) {
    super(props);

    props.observerData.subscribe(props.campo, this);

    this.state = {
      isEdit: false,
      valorEdit: this.getValorFromDataSource()
    };
  }

  getCampoFromDataSource() {
    return this.props.campo;
  }

  getValorFromDataSource() {
    return this.props.dataSource[this.getCampoFromDataSource()];
  }

  onDataSourceChange() {
    this.setState({
      isEdit: false,
      valorEdit: this.getValorFromDataSource()
    });
  }

  onSetCancel() {
    this.setState({
      isEdit: false
    });
  }

  onSetEdit() {
    this.setState({
      isEdit: true,
      valorEdit: this.getValorFromDataSource()
    });
  }

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

  render() {
    const campo = this.props.campo;
    let componente = this.props.dataSource[campo];

    const isEdit = this.state.isEdit;

    let cssError = '';

    if (isEdit) {
      if (!this.getIsValid(this.state.valorEdit)) {
        cssError = 'error';
      }

      let valor = this.state.valorEdit;

      componente = (
        <input
          type="text"
          className="form-control-sm"
          onChange={event => this.onTextoChange(event)}
          value={valor}
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
