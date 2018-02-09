import React from 'react';
import Hero from './scenes/Hero';
import injectSheet from 'react-jss';

const styles = {
  '@global': {
    html: {
      margin: 0,
    },
    body: {
      margin: 0,
      fontFamily: 'sans-serif',
    },
  },
};

class App extends React.PureComponent {
  render() {
    return (
      <Hero />
    );
  }
}

export default injectSheet(styles)(App);
