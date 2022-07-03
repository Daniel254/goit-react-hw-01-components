import styled from 'styled-components';

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  background-color: #fff;
  margin-bottom: 0.5em;
  padding: 10px 5px;
  box-shadow: 0 3px 2px #ccc;
`;

export const Status = styled.span`
  padding: 0.3em;
  border-radius: 50%;
  margin: 0 0.5em;
  background-color: ${({ isOnline }) => (isOnline ? '#47b14a' : '#ff5050')};
`;

export const Name = styled.p`
  margin: 0 10px 0;
`;
