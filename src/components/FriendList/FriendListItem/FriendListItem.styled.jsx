import styled from 'styled-components';

export const Logo = styled.div`
  width: 50px;
`;
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  width: 180px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const FriendStatus = styled.span`
  svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;

    color: ${p => (p.isOnline ? '#159926' : '#9c9c9c')};
  }
`;

export const FriendAvatar = styled.img`
  margin-right: 10px;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
