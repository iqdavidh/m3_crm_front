import React, { Component } from 'react';

class ATrDataEdit extends Component {
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

  render() {
    const campo = this.props.campo;
    let componente = this.props.dataSource[campo];

    const isEdit = this.state.isEdit;

    let cssError = '';

    if (isEdit) {
      if (!this.getIsValid(this.state.valorEdit)) {
        cssError = 'error';
      }

      componente = this.getComponentEdit();
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
