import styled from "styled-components";



export const ContainerP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  /* margin-left: 350px; */
  margin: 50px 280px 20px;
  /* padding: 10px 250px; */
  background-color: #ABABAB;
  border-radius: 80px;

  &:hover{
   background-color: #D1D1D1 ;
  }
  

`
export const Titulo = styled.h1`
  font-family: 'Courier New', Courier, monospace;

`
export const Link = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;

  &:visited{
    color: blue;
    text-decoration: none; 
  }

`