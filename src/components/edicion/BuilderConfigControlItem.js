import ConfigControlItem from './ConfigControlItem';

class BuilderConfigControlItem {
  constructor(campo, label) {
    this.configControlItem = new ConfigControlItem(campo, label, 'TXT');
  }

  setIsRequired() {
    this.configControlItem.validacion.isRequired = true;
    return this;
  }

  setTipoCBX(listaOptions) {
    this.configControlItem.tipo = 'CBX';
    this.configControlItem.addPropiedadAdicional(
      'cbx_listaOptions',
      listaOptions
    );
    return this;
  }

  getConfigControlItem() {
    return this.configControlItem;
  }
}

export default BuilderConfigControlItem;
