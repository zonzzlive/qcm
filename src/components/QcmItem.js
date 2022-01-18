import React from 'react';

class QcmItem extends React.Component {
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

  handleUpdate(laquestionbel) {
    this.props.onUpdate({
      ...this.props.data,
      question,
    });
  }

  render() {
    return (
      <li style={this.props.data.style}>
        <input
          type="checkbox"
          onInput={(e) => this.handleCheck(this.props.data.id, e)}
        />
        <span>{this.props.data.question}</span>
        <input
          type="text"
          value={this.props.data.question}
          onInput={(e) => this.handleUpdate(this.props.data.id, e.target.value)}
        />
        <span>{this.props.data.R1}</span>
        <input
          type="text"
          value={this.props.data.R1}
          onInput={(e) => this.handleUpdate(this.props.data.id, e.target.value)}
        />
        <button onClick={() => this.handleDelete(this.props.data.id)}>x</button>
      </li>
    );
  }
}

export default QcmItem;
