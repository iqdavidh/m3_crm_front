import TrDataEditTXT from './TrDataEditTXT';
import React from 'react';

const fnGetTXT = (c, control, observerData) => {
  return (
    <TrDataEditTXT
      campo={control.campo}
      label={control.label}
      dataSource={c}
      validacion={control.validacion}
      observerData={observerData}
      key={control.campo}
    />
  );
};

const FactoryListaDataEdit = (c, listaConfigControl, observerData) => {
  return listaConfigControl.map(control => {
    if (control.tipo === 'TXT') {
      return fnGetTXT(c, control, observerData);
    } else if (control.tipo === 'CBX') {
    } else {
      console.log('Tipo no detectado');
      return null;
    }
  });
};

export default FactoryListaDataEdit;
