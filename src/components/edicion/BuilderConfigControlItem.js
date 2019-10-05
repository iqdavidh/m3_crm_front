import ConfigControlItem from './ConfigControlItem';

class BuilderConfigControlItem {
  constructor(campo, label) {
    this.configControlItem = new ConfigControlItem(campo, label, 'TXT');
  }

  setIsRequired() {
    this.configControlItem.validacion.isRequired = true;
    return this;
  }

  /*Se usa esto para cuando tenemops un form abierto originalmente como edit*/

  setTipoCBX(listaOptions) {
    this.configControlItem.tipo = 'CBX';
    this.configControlItem.addPropiedadAdicional(
      'cbx_listaOptions',
      listaOptions
    );
    return this;
  }

  setTipoCHK(listaOptions) {
    this.configControlItem.tipo = 'CHK';
    return this;
  }

  setIsCampoEmail() {
    this.configControlItem.subtipo = 'email';
  }

  getConfigControlItem() {
    return this.configControlItem;
  }
}

export default BuilderConfigControlItem;
