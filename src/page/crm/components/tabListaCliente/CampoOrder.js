import React, { Component } from 'react';

class CampoOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      asc: false,
      desc: false
    };

    props.observerOnOrderChange.subscribe(props.label, () => {
      this.setState({
        asc: false,
        desc: false
      });
    });
  }

  onToogle = () => {
    const asc = !this.state.asc;
    const desc = !asc;
    const nombre = this.props.label;

    this.setState({ asc, desc });

    const label = this.props.label;

    this.props.onChangeOpcion({ label, asc });
  };

  render() {
    return (
      <div className={this.props.cname} onClick={this.onToogle}>
        <span className="pr-1">{this.props.label}</span>
        {this.state.asc && <i className="fa fa-sort-up" />}
        {this.state.desc && <i className="fa fa-sort-down" />}
      </div>
    );
  }
}

export default CampoOrder;
