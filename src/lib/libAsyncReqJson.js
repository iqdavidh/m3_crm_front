const isDebug = true;

const consoleIfDebug = data => {
  if (isDebug) {
    console.log(data);
  }
};

const libAsyncReqJson = {
  requestGET: async (url, paramHeader) => {
    consoleIfDebug(url);

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    if (typeof paramHeader === 'object') {
      Object.keys(paramHeader).forEach(key => {
        headers[key] = paramHeader[key];
      });
    }

    return await fetch(url, {
      mode: 'cors',
      method: 'GET',
      headers
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        consoleIfDebug(json);

        return json;
      })
      .catch(error => {
        consoleIfDebug(error);

        return {
          success: false,
          msg: error
        };
      });
  },

  requestPOST: async (url, dataObject, paramHeader) => {
    consoleIfDebug(url);

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    if (typeof paramHeader === 'object') {
      Object.keys(paramHeader).forEach(key => {
        headers[key] = paramHeader[key];
      });
    }

    return fetch(url, {
      mode: 'cors',
      method: 'POST',
      headers,
      body: JSON.stringify(dataObject)
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        consoleIfDebug(json);

        return json;
      })
      .catch(error => {
        consoleIfDebug(error);

        return {
          success: false,
          msg: error
        };
      });
  },
  requestDELETE: async url => {
    consoleIfDebug(url);

    return await fetch(url, {
      mode: 'cors',
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        consoleIfDebug(json);

        return json;
      })
      .catch(error => {
        consoleIfDebug(error);

        return {
          success: false,
          msg: error
        };
      });
  },
  requestPUT: async (url, dataObject, fnError, fnSuccess) => {
    consoleIfDebug(url);

    return await fetch(url, {
      mode: 'cors',
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataObject)
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        consoleIfDebug(json);

        return json;
      })
      .catch(error => {
        consoleIfDebug(error);

        return {
          success: false,
          msg: error
        };
      });
  }
};

export default libAsyncReqJson;
