import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  root: {
    height: '100vh',
    backgroundColor: '#03a9f4',
  },
  title: {
    fontSize: '10vw',
    color: 'white',
  },
};

class Hero extends React.PureComponent {
  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <div className={classes.title}>hello</div>
      </div>
    );
  }
}

export default injectSheet(styles)(Hero);
