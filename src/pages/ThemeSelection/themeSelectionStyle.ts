import styled from "styled-components";

export const ThemeHeader = styled.div`
  h1{
    font-size: 4.5em
  }
`;

export const ThemeCards = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  min-height:300px;
  min-width:250px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding:20px 10px;

  div{
    display:flex;
    border-radius: 5px;
    width:100%;
    padding:5px;
    justify-content:center
  }

`;