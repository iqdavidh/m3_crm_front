import React from 'react';
import './TrDataEditTXT.css';
import ATrDataEdit from './ATrDataEdit';

class TrDataEditCHK extends ATrDataEdit {
  constructor(props) {
    super(props);

    this.fnCustomLabel = valor => {
      if (valor) {
        return <i className="fa fa-check" />;
      } else {
        return <i className="fa fa-close" />;
      }
    };
  }

  onTextoChange(event) {
    const valor = event.target.value;
    const isValid = this.getIsValid(valor);

    this.setState({ valorEdit: valor });

    this.updateIsValid(isValid);

    this.codeID = 'chk' + Math.ceil(Math.random() * 1000000).toString();

    this.props.observerData.onValorChange(
      this.getCampoFromDataSource(),
      valor,
      isValid
    );
  }

  getIsValid(valor) {
    //siempre es valid este campo

    return true;
  }

  getComponentEdit() {
    let valor = this.state.valorEdit;

    let checked = valor ? 'checked' : '';
    return (
      <input
        type="checkbox"
        className="form-control-sm"
        onChange={event => this.onTextoChange(event)}
        checked={checked}
        value="1"
      />
    );
  }

  getComponentRead() {
    let valor = this.getValorFromDataSource();
    return this.fnCustomLabel(valor);
  }
}

export default TrDataEditCHK;
