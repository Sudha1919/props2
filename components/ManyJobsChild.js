import React from 'react';

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
        <h1>
          Hey my name is { this.props.name }!
        </h1>
        <select id="great-names" onChange={ this.handleChange }>
          <option value="">
            Select an option
          </option>

          <option value="Riccardo">
            Riccardo
          </option>

          <option value="Gonzalo">
            Gonzalo
          </option>

          <option value="Anthony">
            Anthony
          </option>
        </select>
      </div>
    );
  }
}
