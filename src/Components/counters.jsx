import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement,onDecrement } = this.props;
    return (
      <div>
        <button
          onClick={() => onReset(counters)}
          className="btn btn-primary"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            counter={counter}
            key={counter.id}
            onDelete={onDelete}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
