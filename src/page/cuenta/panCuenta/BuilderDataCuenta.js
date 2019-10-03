/* crea la lsta de controles que se ven en elpan mainperonal*/

import BuilderConfigControlItem from '../../../components/edicion/BuilderConfigControlItem';

const BuilderDataCuenta = () => {
  let lista = [];

  {
    const b = new BuilderConfigControlItem('nombre', 'Nombre');
    b.setIsRequired();
    lista.push(b.getConfigControlItem());
  }

  /*------------------------------------------------------------*/
  {
    const b = new BuilderConfigControlItem('nick', 'Nick');
    b.setIsRequired();
    lista.push(b.getConfigControlItem());
  }

  /*------------------------------------------------------------*/
  {
    const b = new BuilderConfigControlItem('email', 'Email');
    lista.push(b.getConfigControlItem());
  }
  /*------------------------------------------------------------*/

  return lista;
};

export default BuilderDataCuenta;
