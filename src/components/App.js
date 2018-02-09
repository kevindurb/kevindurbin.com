import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  hello: {
    color: 'red',
  },
}

class App extends React.PureComponent {
  render() {
    return (
      <div className={this.props.classes.hello}>hello world</div>
    );
  }
}

export default injectSheet(styles)(App);
