import styled from 'styled-components';

export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  // align-items: space-between;
  background-color: #f5f5f5;
`;
export const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  flex-direction: column;
  border: 1px solid #e6e6e6;
`;
export const Label = styled.span`
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #545454;
`;
export const Quantity = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: #262626;
`;
