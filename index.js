import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './components/Child';
import { Sibling } from './components/Sibling';
import './style.css';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Michelle' };
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Sibling name={this.state.name} />
        <Child onChange={this.changeName} />
      </div>
    );
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);
