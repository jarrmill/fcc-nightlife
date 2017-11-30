import styled from 'styled-components';

export const SearchContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const SearchTitle = styled.div`
  font-size: 350%;
  font-family: "Brush Script MT", sans-serif;
  margin-bottom: 25px;
  color: #fff;
`
export const SearchBar = styled.div`
  display: flex;
  width:40%;
  height:40px;
  border: 1px solid white;
  border-style: solid;
  border-radius: 15px;
`
export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const SearchInput = styled.input`
  height: 100%;
  width: 90%;
  background-color: transparent;
  border: none;
  border-radius: 15px;
  padding-left: 10px;
  color: #fff;

  &: focus {
    outline: none;
  }

  ::placeholder {
    color: #ccc;
  }
`
export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 10px;
  color: white;

  &: hover {
    color: #ddd;
  }
`
export const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
`
