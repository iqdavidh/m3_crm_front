import ObserverDataEdit from '../../../../lib/ObserverDataEdit';

const ObserverDataPersonal = new ObserverDataEdit();

ObserverDataPersonal.updateTituloCRM = cliente => {
  console.log('no implementado');
};

ObserverDataPersonal.registrarUpdateTituloCRM = fn => {
  ObserverDataPersonal.updateTituloCRM = fn;
};

let listaSuscriptoresOnAddSeg = [];

ObserverDataPersonal.addSeguimiento = dataSeguimiento => {
  listaSuscriptoresOnAddSeg.forEach(s => {
    return s(dataSeguimiento);
  });
};

ObserverDataPersonal.registrarHandlernAddSeg = fn => {
  listaSuscriptoresOnAddSeg.push(fn);
};

export default ObserverDataPersonal;
