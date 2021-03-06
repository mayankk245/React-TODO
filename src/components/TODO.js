import React from "react";
import ListItem from "./ListItem";

class TODO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      tempItem: ""
    };
    this.addDataHandler = this.addDataHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.deleteDataHandler = this.deleteDataHandler.bind(this);
  }

  addDataHandler(e) {
    this.setState({
      listData: this.state.listData.concat(this.state.tempItem)
    });
    this.setState({ tempItem: "" });
    e.preventDefault();
  }

  onChangeHandler(e) {
    this.setState({ tempItem: e.target.value });

    e.preventDefault();
  }
  deleteDataHandler(e) {
    const index = e.target.value;
    const temparr = [...this.state.listData];
    temparr.splice(index, 1);

    this.setState({ listData: temparr });
  }
  render() {
    return (
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <input
                type="text"
                id="item"
                onChange={this.onChangeHandler}
                value={this.state.tempItem}
              />
              <button
                class="btn waves-effect waves-light"
                onClick={this.addDataHandler}
              >
                ADD
              </button>
              <p>
                {this.state.listData.map((data, i) => (
                  <ListItem
                    value={i}
                    listItem={data}
                    onListItemClick={this.deleteDataHandler}
                  >
                    {" "}
                  </ListItem>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TODO;
