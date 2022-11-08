import styled from "styled-components";
import { NavLink } from "react-router-dom";



export const Wrapper = styled.div`
  display: flex;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

`;


export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
`;



export const Poster = styled.img`
  height: 300px;
  margin-right: 20px;
`;

export const GenreWrapper = styled.div`
  display: flex;
  p:not(:last-child) {
    margin-right: 20px;
  }
  p {
    margin-top: 0px;
  }
`;

export const InfoWrapper = styled.div`
  margin-left: 20px;
  box-shadow: 0px -4px 4px -4px rgba(34, 60, 80, 0.4) inset;
  padding-bottom: 4px;
  li {
    margin-bottom: 10px;
  }
`;