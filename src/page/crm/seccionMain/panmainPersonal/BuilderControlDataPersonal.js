/* crea la lsta de controles que se ven en elpan mainperonal*/

import BuilderConfigControlItem from '../../../../components/edicion/BuilderConfigControlItem';

const BuilderControlDataPersonal = () => {
  let lista = [];

  const builderNombre = new BuilderConfigControlItem('nombre', 'Nombre');
  builderNombre.setIsRequired();
  lista.push(builderNombre.getConfigControlItem());

  /*------------------------------------------------------------*/
  const builderAPaterno = new BuilderConfigControlItem(
    'apaterno',
    'A. Paterno'
  );
  builderAPaterno.setIsRequired();
  lista.push(builderAPaterno.getConfigControlItem());

  /*------------------------------------------------------------*/
  const builderAMaterno = new BuilderConfigControlItem(
    'amaterno',
    'A. Materno'
  );
  builderAMaterno.setIsRequired();
  lista.push(builderAMaterno.getConfigControlItem());

  /*------------------------------------------------------------*/

  return lista;
};

export default BuilderControlDataPersonal;
