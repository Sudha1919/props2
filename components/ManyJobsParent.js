import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './components/ManyJobsChild';
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
    return <Child name={ this.state.name } onChange={ this.changeName } />
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);
