import React from 'react';

class Form extends React.Component {
  handleInputChange(name, value) {
    this.form[name] = value;
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

  render() {
    return (
      <form onSubmit={this.handleSubmitForm.bind(this)}>
        <input
          type="number"
          onInput={(event) => this.handleInputChange('id', event.target.value)}
        />
        <input
          type="text"
          onInput={(event) =>
            this.handleInputChange('label', event.target.value)
          }
        />
        <button type="submit">add</button>
      </form>
    );
  }
}

export default Form;
