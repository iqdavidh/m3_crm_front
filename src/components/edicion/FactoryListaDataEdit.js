import TrDataEditTXT from './TrDataEditTXT';
import React from 'react';
import TrDataEditCBX from './TrDataEditCBX';

const fnGetTXT = (dataSource, control, observerData) => {
  return (
    <TrDataEditTXT
      campo={control.campo}
      label={control.label}
      dataSource={dataSource}
      validacion={control.validacion}
      observerData={observerData}
      key={control.campo}
    />
  );
};

const fnGetCBX = (dataSource, control, observerData) => {
  const listaOptions = control.propsAdcionales.cbx_listaOptions;

  return (
    <TrDataEditCBX
      campo={control.campo}
      label={control.label}
      dataSource={dataSource}
      validacion={control.validacion}
      observerData={observerData}
      listaItemOption={control.listaItemOption}
      key={control.campo}
      listaOptions={listaOptions}
    />
  );
};

const FactoryListaDataEdit = (c, listaConfigControl, observerData) => {
  return listaConfigControl.map(control => {
    if (control.tipo === 'TXT') {
      return fnGetTXT(c, control, observerData);
    } else if (control.tipo === 'CBX') {
      return fnGetCBX(c, control, observerData);
    } else {
      console.log('Tipo no detectado');
      return null;
    }
  });
};

export default FactoryListaDataEdit;
