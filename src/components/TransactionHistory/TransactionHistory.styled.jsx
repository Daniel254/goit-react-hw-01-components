import styled from 'styled-components';

export const Title = styled.th`
  background-color: #00bcd5;
  text-transform: uppercase;
  color: #fff;
  line-height: 2em;
  font-weight: 400;
  :first-child {
    border-radius: 5px 0 0 0;
  }
  :last-child {
    border-radius: 0 5px 0 0;
  }
`;
export const TransactionRow = styled.tr`
  background-color: #fff;
  text-transform: capitalize;
  text-align: center;
  color: #949494;
  > :first-child {
    padding-left: 15%;
    text-align: start;
  }
  :nth-child(2n) {
    background-color: #ecf1f4;
  }
`;
