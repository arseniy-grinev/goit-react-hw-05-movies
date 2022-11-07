import styled from "styled-components";
import { NavLink } from "react-router-dom";



export const Wrapper = styled.div`
  display: grid;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  /* &.active {
    color: white;
    background-color: blue;
  } */
`;