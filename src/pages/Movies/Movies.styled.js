import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesForm = styled('form')`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

export const MoviesInput = styled('input')`
  padding: 10px;
  font-size: 20px;
  outline: none;
  border: 2px solid black;
  border-radius: 5px;
`;

export const MoviesButton = styled('button')`
  font-size: 20px;
  background-color: grey;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid black;
  &:hover,
  focus {
    color: black;
    background-color: white;
  }
`;

export const MoviesList = styled('ul')`
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
  color: black;
  text-decoration: none;
  margin-left: 5px;
  &:hover {
    color: #e3811f;
    text-shadow: 0px 0px 20px 8px black;
  }
`;
