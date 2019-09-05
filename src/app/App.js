import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(process.env.REACT_APP_ISDEBUG);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">x</div>
        </div>
      </div>
    );
  }
}

export default App;
