import React from 'react';

const styles = {
  color: 'darkred',
  background: 'lightblue',
  marginTop: 100,
  fontSize: 50
};

export class Sibling extends React.Component {
  render() {
    const name = this.props.name;

    return (
      <div>
        <h1 style={styles}>Hey, my name is <span style={{ color: 'red' }}>{name}!</span></h1>
        <h2>Don't you think <span style={{ color: 'red' }}>{name}!</span> is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked <span style={{ color: 'red' }}>{name}!</span>!</h2>
      </div>
    );
  }
}
