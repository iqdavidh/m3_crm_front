class ConfigControlItem {
  constructor(campo, label, tipo) {
    this.campo = campo;
    this.label = label;
    this.tipo = tipo;
    this.validacion = {
      isRequired: false
    };
  }
}

export default ConfigControlItem;
