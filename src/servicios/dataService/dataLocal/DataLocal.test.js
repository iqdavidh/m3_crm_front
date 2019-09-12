import { assert } from 'chai';
import DataLocal from './DataLocal';
import LibValidacion from '../../../lib/LibValidacion';

describe('DataLocal - indexCliente', function() {
  it('esta presente indexCliente ', function() {
    assert(
      typeof DataLocal.indexCliente === 'function',
      `No esta el método  indexCliente`
    );
  });

  it('pagina 1 - ver datos ', async function() {
    let respuesta = await DataLocal.indexCliente(1);

    assert(respuesta.success, 'La respuesta no es success');
    assert(respuesta.msg === '', 'La no trae msg');
    assert(respuesta.data.total > 0, 'No trae elementos la lista');

    assert(respuesta.data.clientes.length === 10, 'No trae elementos la lista');

    /*verioficar las propiedades que trae los datos*/
    const listaPropieades = [
      'id_cliente',
      'nombre',
      'apaterno',
      'amaterno',
      'indicadores'
    ];
    let row = respuesta.data.clientes[0];
    listaPropieades.forEach(p => {
      assert(
        LibValidacion.isNotEmpty(row[p]),
        `Propiedad en row index cliente vacia : ${p}`
      );
    });
  });
});
