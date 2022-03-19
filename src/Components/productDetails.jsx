import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = ({history}) => {
    history.goBack();
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id} </h1>
        <button onClick={()=> this.handleSave(this.props)}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
