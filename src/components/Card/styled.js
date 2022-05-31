import styled from "styled-components";

export const ContainerP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 50px 280px 20px;
  border-bottom: 3px solid #4B4952;
  font-family: 'Courier New', Courier, monospace;
  left: 190px;  

`
export const Titulo = styled.h1`
  font-weight: 1000;
  align-items: center;
  margin: 5px 5px 0px;
  flex-wrap: wrap;

`
export const Link = styled.a`
  font-weight: 1000;
  align-items: center;
  margin: 5px 5px 0px;
  flex-wrap: wrap;
  cursor: pointer;

  &:visited{
    color: blue;
    text-decoration: none; 
  }

`
