import styled from "styled-components";

export const Background = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:100vh;
`;

export const ThemeHeader = styled.div`
  margin-bottom:50px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:90%;

  h1{
    font-size: 4.5em
  }

  button{
    border-radius:5px;
    border-width:0px;
    padding:0px 5px;
    height:50px;
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
  margin-bottom:15px;

  div{
    display:flex;
    border-radius: 5px;
    width:100%;
    padding:5px;
    justify-content:center
  }
`;

export const Column = styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap: wrap;
  justify-content:center;
`;

export const ColorRow = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  margin-top:15px;

  div{
    display:flex;
    flex-direction:column;
  }
`;

export const ColorSelected = styled.button`
  height:40px;
  width:100px;
  border-radius:5px;
  margin-top:10px;
  border-width:0px;

`;