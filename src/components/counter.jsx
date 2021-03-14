import React, { Component } from "react";

class Counter extends Component {


  render() {
    // console.log(this.props);
    const {onDelete, onIncrement, counterInfo} = this.props;
    return (
      
      <div className="row">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counterInfo)}
          className="btn btn-primary btn-sm m-2 col"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2 col"
          onClick={() => onDelete(counterInfo.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    const {counterInfo} = this.props;
    let classes = "col badge m-2 ";
    classes += counterInfo.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { counterInfo: {value} } = this.props;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
