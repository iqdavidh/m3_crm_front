import clientes_base from './clientes_base';

/* incializar la lista de clientes para tener un data local*/
let lista = clientes_base.map(c => {
  return {
    id_contacto: c.id_contacto,
    nombre: c.nombre,
    apaterno: c.apaterno,
    amaterno: c.amaterno,
    sexo: 'm',
    email1: c.email,
    tel: c.tel,
    origen: '',
    trabajo: '',
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
    }
  };
});

const clientes_dataLocal = lista;

export default clientes_dataLocal;
