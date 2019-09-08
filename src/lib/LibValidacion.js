const LibValidacion = {
  getDataClean: (dataRaw, listaCamposAllow) => {
    let dataClean = {};

    let contadorCampos = 0;

    listaCamposAllow.forEach(c => {
      if (dataRaw[c] !== undefined) {
        dataClean[c] = dataRaw[c];
        contadorCampos++;
      }
    });

    if (contadorCampos === 0) {
      throw new Error('No se encontraron datos requeridos');
    }

    return dataClean;
  },
  isNotEmpty: (valor, nombre = 'valor') => {
    if (valor === null || valor === undefined) {
      throw new Error(`${nombre} - es empty`);
    }

    if (typeof valor === 'string') {
      if (valor.toString().trim() === '') {
        throw new Error(`${valor} - es empty`);
      }
    }

    return true;
  }
};

export default LibValidacion;
