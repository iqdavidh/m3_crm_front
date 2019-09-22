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
  {
    const b = new BuilderConfigControlItem('sexo', 'Sexo');
    b.setIsRequired();
    lista.push(b.getConfigControlItem());
  }
  /*------------------------------------------------------------*/
  {
    const b = new BuilderConfigControlItem('email1', 'Email');
    lista.push(b.getConfigControlItem());
  }
  /*------------------------------------------------------------*/
  {
    const b = new BuilderConfigControlItem('tel', 'Teléfono');
    lista.push(b.getConfigControlItem());
  }
  /*------------------------------------------------------------*/
  {
    const b = new BuilderConfigControlItem('origen', 'Origen');
    lista.push(b.getConfigControlItem());
  }
  /*------------------------------------------------------------*/
  {
    const b = new BuilderConfigControlItem(
      'lugar_de_trabajo',
      'Lugar de Trabajo'
    );
    lista.push(b.getConfigControlItem());
  }
  /*------------------------------------------------------------*/
  {
    const listaValoresOption = [
      { valor: 1, label: 'ND' },
      { valor: 2, label: 'Baja' },
      { valor: 3, label: 'Media' },
      { valor: 4, label: 'Alta' }
    ];

    const b = new BuilderConfigControlItem(
      'indicadores.funelIndex',
      'Estatus',
      'CBX',
      listaValoresOption
    );

    b.setIsRequired().setTipoCBX(listaValoresOption);

    lista.push(b.getConfigControlItem());
  }

  return lista;
};

export default BuilderControlDataPersonal;
