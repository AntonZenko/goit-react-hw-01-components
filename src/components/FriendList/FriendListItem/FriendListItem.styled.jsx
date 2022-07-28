import styled from 'styled-components';

export const Logo = styled.div`
  width: 50px;
  fill: #fff;
`;
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  width: 200px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FriendStatus = styled.span`
  svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;

    color: ${p => (p.isOnline ? 'green' : 'red')};
  }
`;

export const FriendAvatar = styled.img`
  display: block;
  margin-right: 10px;
  height: auto;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
