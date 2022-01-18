import React from 'react';
import Item from './Item';
import Form from './Form';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, label: 'a', style: null },
        { id: 2, label: 'b', style: null },
      ],
    };

    this.form = {
      id: null,
      label: null,
    };
  }

  handleSubmitForm(event) {
    if (this.state.list.find((item) => item.id == this.form.id)) {
      return;
    }
    this.setState((oldState) => {
      return {
        list: [...oldState.list, { ...this.form }],
      };
    });
  }

  handleItemClick(item) {
    this.setState((oldState) => {
      return {
        list: [...oldState.list, item],
      };
    });
  }

  handleInputChange(name, value) {
    this.form[name] = value;
  }

  handleDelete(id) {
    this.setState((oldState) => ({
      list: oldState.list.filter((item) => item.id !== id),
    }));
  }

  handleUpdate(id, newItem) {
    this.setState((oldState) => ({
      list: oldState.list.map((item) => {
        if (item.id === id) {
          return newItem;
        }
        return item;
      }),
    }));
  }

  render() {
    return (
      <>
        <ul>
          {this.state.list.map((item) => (
            <Item
              key={item.id}
              data={item}
              onCheck={(newItem) => this.handleUpdate(item.id, newItem)}
              onUpdate={(newItem) => this.handleUpdate(item.id, newItem)}
            />
          ))}
        </ul>
        <Form />
      </>
    );
  }
}

export default List;
