import { assert } from 'chai';
import libAsyncReqJson from './LibAsyncReqJson';

/*
 * La libreria para hacer todas las lalmdas http REST , usamos await async
 * */

describe('LibAsyncReqJson  ', function() {
  it('Variable de configuracion REACT_APP_ISDEBUG', () => {
    assert(
      parseInt(process.env.REACT_APP_ISDEBUG) === 1,
      'No se leyo la variable de env'
    );
  });

  it('requestGET', async () => {
    let url = 'https://jsonplaceholder.typicode.com/todos/1';

    let respuesta = await libAsyncReqJson.requestGET(url);

    assert(
      typeof respuesta === 'object',
      'no se recibio una respueesta correcta'
    );
    assert(respuesta.userId.toString() === '1', 'El dato userID no viene');
  });

  it('requestGET', async () => {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    const dataPost = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };

    let respuestaPost = await libAsyncReqJson.requestPOST(url, dataPost);

    assert(
      typeof respuestaPost === 'object',
      'no se recibio una respueesta correcta'
    );
    assert(respuestaPost.body === dataPost.body, 'El dato ubody no se paso');
  });

  it('requestDELETE', async () => {
    let url = 'https://jsonplaceholder.typicode.com/todos/1';

    let respuesta = await libAsyncReqJson.requestDELETE(url);

    assert(
      typeof respuesta === 'object',
      'no se recibio una respueesta correcta'
    );
  });
});
