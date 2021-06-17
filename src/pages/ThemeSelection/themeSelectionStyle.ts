import styled from "styled-components";

export const Background = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:100vh;
`;

export const ThemeHeader = styled.div`
  margin-bottom:50px;

  h1{
    font-size: 4.5em
  }
`;

export const ThemeCards = styled.button`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  min-height:300px;
  min-width:250px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding:20px 10px;
  border-style:solid;
  border-width:0px;
  transition-duration: 0.5s;
  margin-right:15px;

  div{
    display:flex;
    border-radius: 5px;
    width:100%;
    padding:5px;
    justify-content:center
  }

  &:hover {
    opacity: 0.5;
    min-height:320px;
    min-width:260px;
  }
`;

export const Row = styled.div`
  display:flex;
  flex-direction:row
`;