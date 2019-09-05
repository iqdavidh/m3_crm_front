/*
 *
 * */

const AutLocal = {
  async getCurrentData(isGetNotUser = false) {
    /*En local inicializamos como usuario 1 , con perfil desde codigo*/

    if (isGetNotUser) {
      return null;
    }

    let data = {
      id_usuario: usuario.id_usuario,
      nombre: usuario.nombre,
      email: usuario.email,
      urlThumb: usuario.urlThumb,
      area: usuario.area,
      isAdmin: usuario.isAdmin
    };

    let token = 'token dummy';
  },
  async validarCurrentData() {}
};

export default AutLocal;
