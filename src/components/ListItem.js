import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return <p onClick={this.props.onListItemClick}>{this.props.listItem}</p>;
  }
}
export default ListItem;
