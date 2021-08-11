import React from 'react';

const names = ['Riccardo', 'Gonzalo', 'Franz', 'Michelle', 'Anthony'];

export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select id="great-names" onChange={this.handleChange}>
          <option selected="true" disabled="disabled">
            Select an option
          </option>
          {names.map(name => (
            <option value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
