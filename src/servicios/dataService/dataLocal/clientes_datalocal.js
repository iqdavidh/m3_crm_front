import clientes_base from './clientes_base';

import gestion_base from './gestion_base';
import LibNum from '../../lib/LibNum';

const fNow = new Date();

/* incializar la lista de clientes para tener un data local*/
let lista = clientes_base.map(c => {
  c.id_usuario = c.id_usuario.toString();

  /* **************************************************** */
  let listaSeguimiento = [];

  let numGestion = LibNum.getRandom(5, 0);

  numGestion = numGestion > 2 ? numGestion : 0;

  if (numGestion > 0) {
    for (let i = 0; i < numGestion; i++) {
      let idTipo = LibNum.getRandom(4);
      let indexComRandom = LibNum.getRandom(15);
      let texto = gestion_base.listaTextoRandom(indexComRandom - 1);

      let gestion = gestion_base.listaTipoGestion(idTipo - 1);
      gestion.id_contacto = c.id_contacto;
      gestion.comentario = texto;

      let numDiasRandom = LibNum.getRandom(300);
      gestion.fecha = LibFecha.getDateFromAddDays(fNow, -numDiasRandom);
      gestion.id_usuario = c.id_usuario;

      listaSeguimiento.push(gestion);
    }
  }

  /* **************************************************** */

  let listaTarea = [];

  let listaMsg = [];

  /* **************************************************** */

  let funelIndex = LibNum.getRandom(4).toString();

  let sentimentalIndex = LibNum.getRandom(3).toString();

  return {
    id_contacto: c.id_contacto,
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
    trabajo: '',
    funelIndex,
    sentimentalIndex,
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
