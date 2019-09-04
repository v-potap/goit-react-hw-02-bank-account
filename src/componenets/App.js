import React, { Component } from 'react';
import styles from './App.module.css';

import Dashboard from './Dashboard/Dashboard';

class App extends Component {
  state = {};

  render() {
    return (
      <div className={styles.containerApp}>
        <Dashboard />
      </div>
    );
  }
}

export default App;
