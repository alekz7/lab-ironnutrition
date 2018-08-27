import React, { Component } from 'react';
import logo from './logo.svg';
import foods from './data/foods';
import FoodBox from './components/FoodBox';
import { Input } from 'antd';

const Search = Input.Search;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: foods,
    };
  }
  
  handleChange(event){    
    console.log(event.target.value);
    console.log(foods);
    var filterFoods = foods.filter(function (obj) {
      return obj.name.toLowerCase().includes(event.target.value.toLowerCase());
    });    
    
    console.log(filterFoods);

    this.setState({
      data: filterFoods,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lab IronNutritions</h1>
        </header>
        <br />

        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Search placeholder="input search text"
              onChange={this.handleChange}
              onSearch={value => console.log(value)}
              enterButton
            />
          </div>
        </div>

        <div className="columns">
          <div className="column is-half is-offset-one-quarter">

            {foods.map((food, index) =>{ return <FoodBox {... food} index={index}/> })}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
