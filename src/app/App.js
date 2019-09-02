import React from 'react';

import './App.css';

function App() {
  console.log(process.env.REACT_APP_ISDEBUG);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">x</div>
      </div>
    </div>
  );
}

export default App;
