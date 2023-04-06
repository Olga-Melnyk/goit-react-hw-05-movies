import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  padding: 8px;
  text-decoration: none;
  color: white;
  font-size: 25px;
  border-radius: 5px;
  &.active {
    background-color: white;
    color: black;
  }
  &:hover {
    scale: calc(1.03);
    box-shadow: 0px 0px 15px 6px black;
  }
`;

export const NavList = styled('nav')`
  background-color: grey;
  display: flex;
  padding: 20px;
  gap: 40px;
`;
