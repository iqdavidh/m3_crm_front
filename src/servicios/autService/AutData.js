import LibValidacion from '../../lib/LibValidacion';

class AutData {
  constructor(token, usuario) {
    LibValidacion.isNotEmpty(token);
    this.token = token;

    const listaProp = [
      'id_usuario',
      'nombre',
      'email',
      'urlThumb',
      'area',
      'perfil'
    ];

    /* copiar las propieades y validar  */
    this.usuario = {};
    listaProp.forEach(p => {
      LibValidacion.isNotEmpty(usuario[p]);
      this.usuario[p] = usuario[p];
    });

    this.usuario = {
      id_usuario: usuario.id_usuario,
      nombre: usuario.nombre,
      email: usuario.email,
      urlThumb: usuario.urlThumb,
      area: usuario.area,
      perfil: usuario.perfil
    };
  }
}

export default AutData;
