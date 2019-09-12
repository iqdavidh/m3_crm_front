import React from 'react';
import LibValidacion from '../../lib/LibValidacion';

function PestanaTab(props) {
  const isSetcontador = LibValidacion.isNotEmpty(props.contador) === true;
  const contador = isSetcontador ? (
    <span className="badge badge-dark badgeTituloTab">{props.contador}</span>
  ) : null;

  const isSetIcon = LibValidacion.isNotEmpty(props.icon) === true;
  const icon = isSetIcon ? <i className={props.icon} /> : null;

  const isSetLabel = LibValidacion.isNotEmpty(props.label) === true;
  const label = isSetLabel ? (
    <span className="labelPestanaTab">{props.label}</span>
  ) : null;

  return (
    <div title={props.title} className="pestanaTab">
      {icon}
      {label}
      {contador}
    </div>
  );
}

export default PestanaTab;
