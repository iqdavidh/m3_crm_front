import React from 'react';

function PestanaTab(props) {
  return (
    <div title={props.title} className="pestanaTab">
      <i className={props.icon} />
      <span className="badge badge-dark badgeTituloTab">{props.label}</span>
    </div>
  );
}

export default PestanaTab;
