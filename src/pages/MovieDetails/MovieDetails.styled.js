import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkBox = styled('div')`
  padding: 20px;
`;

export const LinkBack = styled(Link)`
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  border: 2px solid black;
  background-color: grey;
  &:hover,
  :focus {
    background-color: white;
    color: black;
    scale: calc(1.03);
    box-shadow: 0px 0px 15px 6px black;
  }
`;

export const MovieDetailsAdditional = styled('div')`
  padding: 50px;
`;

export const MovieDetailsAdditionalTitle = styled('h2')`
  margin-top: 0;
  font-size: 25px;
`;

export const LinkItem = styled(Link)`
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  font-size: 25px;
  color: black;
  border-radius: 5px;
  border: 2px solid black;
  &:focus,
  :hover {
    color: white;
    background-color: grey;
    scale: calc(1.03);
    box-shadow: 0px 0px 15px 6px black;
  }
  &:not(:last-child) {
    margin-right: 40px;
  }
`;
