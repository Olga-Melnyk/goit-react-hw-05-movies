import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendingTitle = styled('h1')`
  text-align: center;
  font-weight: 900;
  font-size: 40px;
`;

export const MoviesList = styled('ul')`
  background-color: grey;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const MovieItem = styled('li')`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const LinkItem = styled(Link)`
  font-size: 20px;
  font-weight: 400;
  color: white;
  text-decoration: none;
  margin-left: 5px;
  &:hover {
    color: #e3811f;
    text-shadow: 0px 0px 20px 8px black;
  }
`;
