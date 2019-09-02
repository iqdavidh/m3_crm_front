const isDebug = parseInt(process.env.REACT_APP_ISDEBUG) === 1;

const consoleIfDebug = data => {
  if (isDebug) {
    console.log(data);
  }
};

const LibAsyncReqJson = {
  requestGET: async url => {
    consoleIfDebug(url);

    return await fetch(url, {
      mode: 'cors',
      method: 'GET',
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

  requestPOST: async (url, dataObject) => {
    consoleIfDebug(url);

    return await fetch(url, {
      mode: 'cors',
      method: 'POST',
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

export default LibAsyncReqJson;
