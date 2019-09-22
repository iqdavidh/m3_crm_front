import React from 'react';
import './TrDataEditTXT.css';
import ATrDataEdit from './ATrDataEdit';

class TrDataEditCBX extends ATrDataEdit {
  listaItemOption = [];

  setListaOption = lista => {
    this.listaItemOption = lista;
  };

  onValorChange(event) {
    const valor = event.target.value;

    this.setState({ valorEdit: valor });

    this.props.observerData.onValorChange(
      this.getCampoFromDataSource(),
      valor,
      true
    );
  }

  getIsValid(valor) {
    return true;
  }

  getComponentEdit() {
    console.log(this.state);

    let valor = this.state.valorEdit;

    if (this.props.listaOptions.length === 0) {
      throw Error(
        'Falta indicar la lista de opciones del CBX, this.setListaOption'
      );
    }

    const lista = this.props.listaOptions.map(item => {
      return (
        <option value={item.valor} key={item.valor}>
          {item.label}
        </option>
      );
    });
    return (
      <select
        className="form-control-sm"
        onChange={event => this.onValorChange(event)}
        value={valor}
      >
        {lista}
      </select>
    );
  }

  getComponentRead() {
    let valor = this.getValorFromDataSource();

    valor = parseInt(valor);
    const listaValoresOption = [
      { valor: 1, label: 'ND' },
      { valor: 2, label: 'Baja' },
      { valor: 3, label: 'Media' },
      { valor: 4, label: 'Alta' }
    ];

    const tag = listaValoresOption[valor - 1].label;

    return tag;
  }
}

export default TrDataEditCBX;
