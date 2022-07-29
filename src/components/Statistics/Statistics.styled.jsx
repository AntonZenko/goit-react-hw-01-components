import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  color: #383838;
  font-size: 24px;
  margin-bottom: 14px;
`;

export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  border-radius: 5px;
`;

export const StatItem = styled.li`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-width: 60px;
  text-align: center;
  font-weight: 500;
  color: #000;
  background-color: ${p => getRandomHexColor()};
  :not(:last-child) {
    margin-right: 5px;
  }
`;

export const Label = styled.span`
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
