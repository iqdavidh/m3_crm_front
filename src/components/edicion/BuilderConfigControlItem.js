import ConfigControlItem from './ConfigControlItem';

class BuilderConfigControlItem {
  constructor(campo, label, tipo = 'TXT') {
    this.configControlItem = new ConfigControlItem(campo, label, tipo);
  }

  setIsRequired() {
    this.configControlItem.validacion.isRequired = true;
    return this;
  }

  getConfigControlItem() {
    return this.configControlItem;
  }
}

export default BuilderConfigControlItem;
