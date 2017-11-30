import React, { Component } from 'react';
import '../Assets/font-awesome/css/font-awesome.css';
import { SearchContainer, SearchBar, SearchInput, SearchForm, SearchButton, SearchTitle, Logo} from './search_styling';

class Search extends Component {
  constructor(){
    super();
    this.state = { city: ''}
  }
  handleWordChange = (evt) => {
    this.setState({city: evt.target.value});
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.getRestaurants(this.state.city);
    this.props.history.push("/results");
  }
  render() {
    return(
    <SearchContainer>
      <Logo src={require("../Assets/images/nightlife_logo.png")} alt="Logo"/>
      <SearchTitle> Nightlife Search</SearchTitle>
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchInput
            type="text"
            placeholder="Enter a city to get started"
            value={this.state.city}
            onChange={this.handleWordChange}
          />
          <SearchButton><span className="fa fa-search"></span></SearchButton>
        </SearchForm>
      </SearchBar>
    </SearchContainer>
    )
  }
}


export default Search;
