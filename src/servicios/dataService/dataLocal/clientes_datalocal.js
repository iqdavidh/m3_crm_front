import clientes_base from './clientes_base';

import gestion_base from './gestion_base';
import LibNum from '../../../lib/LibNum';
import LibFecha from '../../../lib/LibFecha';

const fNow = new Date();

/* incializar la lista de clientes para tener un data local*/

let indexGestion = 1;

let lista = clientes_base.map(c => {
  c.id_usuario = c.id_usuario.toString();

  /* **************************************************** */
  let listaSeguimiento = [];

  let numGestion = LibNum.getRandom(5, 0);

  numGestion = numGestion > 2 ? numGestion : 0;

  indexGestion++;

  if (numGestion > 0) {
    for (let i = 0; i < numGestion; i++) {
      indexGestion++;

      let idTipo = LibNum.getRandom(4);
      let indexComRandom = LibNum.getRandom(15);
      let texto = gestion_base.listaTextoRandom[indexComRandom - 1];

      let gestion = gestion_base.listaTipoGestion[idTipo - 1];
      gestion.id_cliente = c.id_cliente;
      gestion.comentario = texto;
      gestion.id = indexGestion;

      let numDiasRandom = LibNum.getRandom(300);
      gestion.fecha = '30/09/2019';
      gestion.id_usuario = c.id_usuario;

      listaSeguimiento.push(gestion);
    }
  }

  /* **************************************************** */

  let listaTarea = [];

  let listaMsg = [];

  /* **************************************************** */

  let funelIndex = LibNum.getRandom(4).toString();

  return {
    id_cliente: c.id_cliente,
    id_usuario: c.id_usuario,
    usuario: {
      nombre: c.id_usuario === '1' ? 'Dave' : 'Hail',
      area: 'area1'
    },

    nombre: c.nombre,
    apaterno: c.apaterno,
    amaterno: c.amaterno,
    sexo: 'm',
    email1: c.email,
    tel: c.tel,
    origen: '',
    lugar_de_trabajo: '',
    indicadores: {
      funelIndex
    },
    dom: {
      personal: {
        calle: c.domper_calle,
        num: c.domper_num,
        col: c.domper_colonia,
        mpo: c.domper_mpo,
        edo: c.domper_edo,
        ind: '',
        coord: null
      },
      trabajo: {
        calle: c.domlab_calle,
        num: c.domlab_num,
        col: c.domlab_colonia,
        mpo: c.domlab_mpo,
        edo: c.domlab_edo,
        coord: null
      }
    },
    gestion: {
      listaSeguimiento,
      listaTarea,
      listaMsg
    }
  };
});

const clientes_dataLocal = lista;

export default clientes_dataLocal;
