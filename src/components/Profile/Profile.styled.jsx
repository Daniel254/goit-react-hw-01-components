import styled from 'styled-components';

export const Container = styled.section`
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #dce3ec;
  width: 250px;
  overflow: hidden;
`;
export const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;
export const Name = styled.p`
  font-size: 1em;
  color: #333;
  font-weight: 700;
`;
export const Tag = styled.p`
  font-size: 0.6em;
  color: #768696;
`;
export const Location = styled.p`
  font-size: 0.7em;
  color: #768696;
`;
export const StatsList = styled.ul`
  display: flex;
  height: 75px;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #f3f6f9;
  border-top: 1px solid #e4e9f0;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33.33%;
  height: 100%;
  border-right: 1px solid #e4e9f0;
  &:last-child {
    border-right: none;
  }
`;
export const Label = styled.span`
  font-size: 12px;
  color: #768696;
`;
export const Quantity = styled.span`
  font-size: 12px;
  font-weight: 700;
`;
