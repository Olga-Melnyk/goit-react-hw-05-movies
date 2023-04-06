import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendingTitle = styled('h1')`
  text-align: center;
  font-weight: 900;
  font-size: 40px;
`;

export const MoviesList = styled('div')`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: grey;
`;

export const MovieTitle = styled('h2')`
  text-align: center;
  font-size: 25px;
  color: white;
  &:hover {
    color: #e3811f;
    text-shadow: 0px 0px 20px 8px black;
  }
`;

export const LinkItem = styled(Link)`
  width: 400px;
  background-color: grey;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-decoration: none;
  margin-bottom: 40px;
  &:hover {
    scale: calc(1.03);
    box-shadow: 0px 0px 20px 8px black;
  }
  &:nth-last-child(-n + 4) {
    margin-bottom: 0;
  }
`;
