import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesForm = styled('form')`
  display: flex;
  gap: 30px;
  padding: 20px;
`;

export const MoviesInput = styled('input')`
  padding: 10px;
  font-size: 20px;
  outline: none;
  border: 2px solid black;
  border-radius: 5px;
  &:hover {
    scale: calc(1.03);
    box-shadow: 0px 0px 15px 6px black;
  }
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
    scale: calc(1.03);
    box-shadow: 0px 0px 15px 6px black;
  }
`;

export const MoviesList = styled('div')`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: grey;
`;
export const MovieItem = styled('li')`
  &:not(:last-child) {
    margin-bottom: 5px;
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

export const MovieTitle = styled('h2')`
  text-align: center;
  font-size: 25px;
  color: white;
  &:hover {
    color: #e3811f;
    text-shadow: 0px 0px 20px 8px black;
  }
`;
