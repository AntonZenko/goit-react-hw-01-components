import PropTypes from 'prop-types';
import {
  Transaction,
  TransactionHead,
  TransactionRow,
  TransactionData,
  TransactionTitle,
} from './TransactionHistory.styled';

const TransactionHistory = ({ transactions }) => {
  return (
    <Transaction>
      <TransactionHead>
        <tr>
          <TransactionTitle>Type</TransactionTitle>
          <TransactionTitle>Amount</TransactionTitle>
          <TransactionTitle>Currency</TransactionTitle>
        </tr>
      </TransactionHead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TransactionRow key={id}>
              <TransactionData>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </TransactionData>
              <TransactionData>{amount}</TransactionData>
              <TransactionData>{currency}</TransactionData>
            </TransactionRow>
          );
        })}
      </tbody>
    </Transaction>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default TransactionHistory;
