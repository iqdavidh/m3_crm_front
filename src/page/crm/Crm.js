import React, { Component } from 'react';
import TopBar from '../../components/topbar/TopBar';

class Crm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modoGrid: ''
    };
  }

  setModoGestion(modo) {
    if (this.state.modoGrid === modo) {
      this.setState({ modoGrid: '' });
    } else {
      this.setState({ modoGrid: modo });
    }

    console.log('modoGrid', this.state.modoGrid);
  }

  render() {
    return (
      <div className="container-main">
        <div className="cell cell-topbar">
          <TopBar />
        </div>

        <div className="cell cell-browser">browser</div>

        <div className="cell-data-main">main</div>
        <div
          className="cell-data-add"
          onClick={e => this.setModoGestion('addGestion')}
        >
          add
        </div>
        <div className="cell-data-historial">historial</div>
      </div>
    );
  }
}

export default Crm;
