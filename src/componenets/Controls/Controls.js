import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TransactionType from '../../services/transaction-type';

import styles from './Controls.module.css';

export default class Controls extends Component {
  state = {
    inputValue: '',
  };

  handleButtonClick = e => {
    const { handleTransactionAdd } = this.props;
    const type = e.target.name;
    const amount = this.state.inputValue;

    this.setState({ inputValue: '' });

    handleTransactionAdd({ type, amount });
  };

  handleInput = e => {
    this.setState({ inputValue: Number.parseFloat(e.target.value) });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <section className={styles.controls}>
        <input
          type="number"
          className={styles.input}
          onChange={this.handleInput}
          value={inputValue}
        />
        <button
          type="button"
          className={styles.button}
          onClick={this.handleButtonClick}
          name={TransactionType.DEPOSIT}
        >
          Deposit
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={this.handleButtonClick}
          name={TransactionType.WITHDRAW}
        >
          Withdraw
        </button>
      </section>
    );
  }
}

Controls.propTypes = { handleTransactionAdd: PropTypes.func.isRequired };
