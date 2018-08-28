import React, { Component } from 'react';
import logo from './logo.svg';
import foods from './data/foods';
import FoodBox from './components/FoodBox';
import { Input } from 'antd';
import { Card } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

const Search = Input.Search;

class App extends Component {

  constructor() {    
    super();
    this.state = {
      data: foods,
      calories: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.suma = this.suma.bind(this);
  }

  suma(myArray){
    let totalCalorias = 0;
    for(var i = 0; i< myArray.length;i++){
      let temp = 0;
      if ((myArray.calories * myArray.quantity) > 0){ temp = (myArray.calories * myArray.quantity)};
      totalCalorias = totalCalorias + temp;
    }           
    return totalCalorias;
  }
  
  handleChange(event){        
    var filterFoods = foods.filter(function (obj) {
      return obj.name.toLowerCase().includes(event.target.value.toLowerCase());
    });        
    this.setState({
      data: filterFoods,
    });
  }

  Multiplica(index,calories,cuantos){        
    var updatedData = this.state.data;
    updatedData[index].quantity = cuantos;
    
    this.setState({
      data: updatedData,
    })

    this.suma(updatedData);       
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
            <div className="columns">              
              <div className="column">
                {this.state.data.map((food, index) =>{ return <FoodBox {... food} index={index} key={index}
                  accion = {this.Multiplica.bind(this)}/> })}
              </div>          
              <div className="column">
                <Card title="Today's foods" >                  
                  {this.state.data.filter(obj=>obj.quantity>0).map((food, index) => { 
                    return <p {... food} index={index} key={index}>{food.name}</p>                    
                  })}
                </Card>
                <b>                  
                  Total Calorias: {this.suma(this.state.data)}
                </b>                
              </div>
            </div>          
          </div>          
        </div>
      </div>
    );
  }
}

export default App;
