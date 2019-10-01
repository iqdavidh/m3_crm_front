import React, { Component } from 'react';

class SeccionUsuarios extends Component {
  render() {
    return (
      <div className="cell-data-usuarios wrapperTab">
        <table className="table table-striped table-info">
          <thead>
            <th>#</th>
            <th></th>
            <th>Nombre</th>
            <th>Nick</th>
            <th>Email</th>
            <th>Admin</th>
            <th></th>
          </thead>
        </table>
      </div>
    );
  }
}

export default SeccionUsuarios;
