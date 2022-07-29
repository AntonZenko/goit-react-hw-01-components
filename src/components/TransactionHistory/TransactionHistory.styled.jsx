import styled from 'styled-components';

export const Transaction = styled.table`
  width: 70vw;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  border-collapse: collapse;
`;

export const TransactionHead = styled.thead`
  font-size: 18px;
  background-color: #6bdaa3;
  color: #383838;
`;

export const TransactionRow = styled.tr`
  :nth-child(2n) {
    background-color: #ededed;
  }
`;

export const TransactionData = styled.td`
  padding: 8px;
  border: 1px solid #e6e6e6;
  color: #383838;
  font-weight: 500;
`;

export const TransactionTitle = styled.th`
  padding: 8px;
`;
