class ConfigControlItem {
  constructor(campo, label, tipo) {
    this.campo = campo;
    this.label = label;
    this.tipo = tipo;
    this.validacion = {
      isRequired: false
    };

    this.propsAdcionales = {};
  }

  addPropiedadAdicional(nombreValor, valor) {
    this.propsAdcionales[nombreValor] = valor;
  }
}

export default ConfigControlItem;
