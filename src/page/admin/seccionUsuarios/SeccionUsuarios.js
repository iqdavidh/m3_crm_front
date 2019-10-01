import React, { Component } from 'react';

class SeccionUsuarios extends Component {
  render() {
    return (
      <div>
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
