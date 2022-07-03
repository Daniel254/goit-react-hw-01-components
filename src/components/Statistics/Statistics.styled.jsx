import styled from 'styled-components';
import { color } from 'styled-system';

export const Title = styled.h2`
  text-transform: uppercase;
  color: #767879;
  font-size: 1em;
`;
export const StatList = styled.ul`
  display: flex;
  height: 75px;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #f3f6f9;
  border-top: 1px solid #e4e9f0;
`;
export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33.33%;
  height: 100%;
  color: #fff;
  ${color};
`;
export const Label = styled.span`
  font-size: 0.6em;
`;
