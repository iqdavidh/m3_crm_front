import { assert } from 'chai';

import LibValidacion from '../../../lib/LibValidacion';
import DataService from '../DataService';

describe('DataLocal - indexCliente', function() {
  it('esta presente indexCliente ', function() {
    assert(
      typeof DataService.indexCliente === 'function',
      `No esta el método  indexCliente`
    );
  });

  it('pagina 1 - ver datos ', async function() {
    let respuesta = await DataService.indexCliente(1);

    assert(respuesta.success, 'La respuesta no es success');
    assert(respuesta.msg === '', 'La no trae msg');
    assert(respuesta.data.total > 0, 'No trae elementos la lista');

    assert(respuesta.data.clientes.length > 0, 'No trae elementos la lista');

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

/* ******************************************************* */
/* buscar cliente a partir de id_*/
describe('dataClienteSelected', function() {
  it('esta presente la funcion ', function() {
    assert(
      typeof DataService.dataClienteSelected === 'function',
      `No esta el método  dataClienteSelected`
    );
  });

  it('pagina 1 - ver datos ', async function() {
    let respuesta = await DataService.dataClienteSelected(2);

    assert(respuesta.success, 'La respuesta no es success');
    assert(respuesta.msg === '', 'La no trae msg');

    assert(
      Object.keys(respuesta.data).length > 0,
      'No trae propiedades el object data'
    );

    /*verioficar las propiedades que trae los datos*/
    const listaPropieades = ['id_cliente', 'nombre', 'apaterno'];
    let row = respuesta.data;
    listaPropieades.forEach(p => {
      assert(
        LibValidacion.isNotEmpty(row[p]),
        `Propiedad en cliente vacia : ${p}`
      );
    });
  });
});

/* ******************************************************* */
/* buscar cliente a partir de id_*/
describe('dataClienteSelected', function() {
  it('esta presente la funcion ', function() {
    assert(
      typeof DataService.dataClienteSelected === 'function',
      `No esta el método  dataClienteSelected`
    );
  });

  it('pagina 1 - ver datos ', async function() {
    let respuesta = await DataService.dataClienteSelected(2);

    assert(respuesta.success, 'La respuesta no es success');
    assert(respuesta.msg === '', 'La no trae msg');

    assert(
      Object.keys(respuesta.data).length > 0,
      'No trae propiedades el object data'
    );

    /*verioficar las propiedades que trae los datos*/
    const listaPropieades = ['id_cliente', 'nombre', 'apaterno'];
    let row = respuesta.data;
    listaPropieades.forEach(p => {
      assert(
        LibValidacion.isNotEmpty(row[p]),
        `Propiedad en cliente vacia : ${p}`
      );
    });
  });
});

/* ******************************************************* */
/* buscar cliente a partir de id_*/
describe('saveCliente', function() {
  it('esta presente la funcion ', function() {
    assert(
      typeof DataService.saveCliente === 'function',
      `No esta el método  saveCliente`
    );
  });

  it('se hace update de un cliente', async function() {
    const dataUpdate = {
      nombre: 'nombre-xxx',
      apaterno: 'apaterno-yyy'
    };

    let respuesta = await DataService.saveCliente(2, dataUpdate);

    assert(respuesta.success, 'La respuesta no es success');
    assert(respuesta.msg === '', 'La no trae msg');
  });

  it('se hace insert de un cliente', async function() {
    const dataInsert = {
      nombre: 'nombreisert',
      apaterno: 'apaternoinsert'
    };

    let respuestaInsert = await DataService.insertCliente(dataInsert);

    assert(respuestaInsert.success, 'La respuesta no es success');
    assert(respuestaInsert.msg === '', 'La no trae msg');

    const idClienteAgregado = respuestaInsert.data.id_cliente;

    assert(idClienteAgregado > 0, 'se esperaba el id_cliente creado');

    let respuestaDelete = await DataService.deleteCliente(idClienteAgregado);

    assert(respuestaDelete.success, 'La respuesta no es success');
    assert(respuestaDelete.msg === '', 'La no trae msg');
  });
});
