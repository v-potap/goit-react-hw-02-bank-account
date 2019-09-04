import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

function Balance({ depositAmount, withdrawAmount, balance }) {
  return (
    <section className={styles.balance}>
      <span role="img" aria-label="upArrow">
        ⬆️
        {depositAmount.toLocaleString('us-EN', {
          minimumFractionDigits: 2,
        })}
        $
      </span>
      <span role="img" aria-label="downArrow">
        ⬇️
        {withdrawAmount.toLocaleString('us-EN', {
          minimumFractionDigits: 2,
        })}
        $
      </span>
      <span>
        Balance:{' '}
        {balance.toLocaleString('us-EN', {
          minimumFractionDigits: 2,
        })}
        $
      </span>
    </section>
  );
}

Balance.propTypes = {
  depositAmount: PropTypes.number.isRequired,
  withdrawAmount: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

export default Balance;
