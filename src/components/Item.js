import React from 'react';

class Item extends React.Component {
  handleDelete(id) {
    this.setState((oldState) => ({
      list: oldState.list.filter((item) => item.id !== id),
    }));
  }

  handleCheck(e) {
    this.props.onCheck({
      ...this.props.data,
      checked: e,
      style: {
        color: e ? 'red' : 'black',
      },
    });
  }

  handleUpdate(label) {
    this.props.onUpdate({
      ...this.props.data,
      label,
    });
  }

  render() {
    return (
      <li style={this.props.data.style}>
        <input
          type="checkbox"
          onInput={(e) => this.handleCheck(this.props.data.id, e)}
        />
        <span>{this.props.data.label}</span>
        <input
          type="text"
          value={this.props.data.label}
          onInput={(e) => this.handleUpdate(this.props.data.id, e.target.value)}
        />
        <button onClick={() => this.handleDelete(this.props.data.id)}>x</button>
      </li>
    );
  }
}

export default Item;
