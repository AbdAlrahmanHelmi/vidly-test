import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { item, textProperty, valueProperty, onItemSelect, selectedItem } =
      this.props;
    return (
      <ul className="list-group mr-2">
        {item.map((item) => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? "list-group-item text-center active"
                : "list-group-item text-center"
            }
            style={{ cursor: "pointer" }}
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
