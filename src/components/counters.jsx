import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  render() {
    const {onReset, counters, onDelete, onIncrement} = this.props;
    return (
      <main className="container">
        <button onClick={onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counterInfo={counter}
          />
        ))}
      </main>
    );
  }

  
}

export default Counters;
