import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, stateProps) {
    console.log(`prevProps`, prevProps);
    console.log(`stateProps`, stateProps);
  }

  componentWillUnmount() {
    console.log(`counter-unmount`);
  }

  handelCount = () => {
    if (this.props.counter.value === 0)
      return <span className="badge badge-warning">zero</span>;
    else
      return (
        <span className="badge badge-primary">{this.props.counter.value}</span>
      );
  };
 
  render() {
    return (
      <div>
        {this.handelCount()}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary ml-2"
        >
          {" "}
          Increment
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary ml-2"
          disabled={this.props.counter.value === 0 ? true : false}
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
