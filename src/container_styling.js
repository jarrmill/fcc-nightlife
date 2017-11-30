import styled from 'styled-components';


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background:linear-gradient(to bottom right,#4d004d, #004d99);
  width: 100vw;
  height: 100vh;
  overflow: auto;
  font-color: #fff;
`
export const Header = styled.div`
  background-color: tranparent;
  width: 100vw;
`
export const HeaderButton = styled.button`
  background-color: transparent;
  border-style: none;
  border-bottom: 1px solid transparent;
  color: white;

  &: hover {
    border-bottom: 1px solid white;
    -webkit-border-radius: 0px;
  }
`
