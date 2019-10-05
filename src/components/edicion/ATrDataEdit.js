import React, { Component } from 'react';

class ATrDataEdit extends Component {
  constructor(props) {
    super(props);

    props.observerData.subscribe(props.campo, this);

    this.state = {
      isEdit: props.isModoInicialEdit,
      valorEdit: this.getValorFromDataSource()
    };

    this.isValid = null;

    this.fnCustomLabel = valor => {
      return valor.toString();
    };
  }

  /***
   * A partir de un valor bool regresa el control para modo rea
   * @param fn
   */
  setFnCustomLabel(fn) {
    this.fnCustomLabel = fn;
  }

  getValueEdit() {
    return this.state.valorEdit;
  }

  getIsValidCurrentValue() {
    if (this.isValid === null) {
      this.isValid = this.getIsValidCurrentValorEdit();
    }

    return this.isValid;
  }

  updateIsValid(b) {
    this.isValid = b;
  }

  getCampoFromDataSource() {
    return this.props.campo;
  }

  getIsValidCurrentValorEdit() {
    return this.getIsValid(this.state.valorEdit);
  }

  getValorFromDataSource() {
    let nombrePropiedad = this.getCampoFromDataSource().toString();

    if (!nombrePropiedad.includes('.')) {
      return this.props.dataSource[nombrePropiedad];
    }

    let data = this.props.dataSource;

    nombrePropiedad.split('.').forEach(p => {
      data = data[p];
    });

    return data;
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

  render() {
    let componente = null;

    const isEdit = this.state.isEdit;

    let cssError = '';

    if (isEdit) {
      if (!this.getIsValid(this.state.valorEdit)) {
        cssError = 'error';
      }

      componente = this.getComponentEdit();
    } else {
      componente = this.getComponentRead();
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

export default ATrDataEdit;
