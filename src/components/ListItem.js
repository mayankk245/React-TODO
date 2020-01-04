import React from "react";

class ListItem extends Comment {
  render() {
    return <p>{this.props.listItem}</p>;
  }
}
export default ListItem;
