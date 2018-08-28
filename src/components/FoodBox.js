import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FoodBox extends Component{

  constructor(props){
    super(props);
    this.state = {
      cuantos: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){    
    console.log(event.target.value);    
    this.setState({
      cuantos: event.target.value,
    })
  }

  render(){
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input is-primary" type="number" onChange={this.handleChange}/>
              </div>
              <div className="control">
                <button className="button is-info" onClick={() => this.props.accion(this.props.index, this.props.calories, this.state.cuantos)}> + </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}
export default FoodBox;
