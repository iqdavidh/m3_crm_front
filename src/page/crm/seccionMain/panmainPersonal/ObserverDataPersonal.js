import ObserverDataEdit from '../../../../lib/ObserverDataEdit';

const ObserverDataPersonal = new ObserverDataEdit();

ObserverDataPersonal.updateTituloCRM = cliente => {
  console.log('no implementado');
};

ObserverDataPersonal.registrarUpdateTituloCRM = fn => {
  ObserverDataPersonal.updateTituloCRM = fn;
};

export default ObserverDataPersonal;
