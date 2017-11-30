import styled from 'styled-components';

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`
export const PanelContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  overflow: hidden;
  box-sizing: border-box;
  height: 80px;
  width: 60vw;
  margin-bottom: 5px;
  background-color: transparent;
  border: 1px solid white;;
`
export const PicContainer = styled.div`
  display: flex;
  height: 100%;
  width: 80px;
  align-items: center;
  justify-content: center;
  align-items: center;
  background-color: rgba(76, 76, 76, 0.0);
  overflow: hidden;
`
export const Pic = styled.img`
  object-fit: cover;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid #aaa;
`
export const TextContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 5px;
  flex: 1 0 auto;
`
export const MainTitle = styled.h1`
  color: white;
  font-size: 200%
`
//regular title is for the restaurant titles in the panels
export const Title = styled.h1`
  font-size: 120%;
  color: white;
`
export const Body = styled.p`
  color: white;
`
export const Button = styled.button`
  background-color: ${props => props.rsvped ?
'#2ecc71' : 'rgba(2, 2, 2, 0.2)'};
  flex-shrink: 0;
  border-radius: 0;
  color: white;
  width: 100px;
  height: 100%;
  border: none;

  &: hover{
    background-color: ${props => props.rsvped ?
    '#27ae60' : 'rgba(2, 2, 2, 0.4)'};
  }

  &: focus{
    outline: 0;
  }
`
export const NullButton = styled.div`
  display: none;
`
