import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/toys')
      .then(response => response.json())
      .then(toys => {
        this.setState({
          toys: toys.map(toy => {
            return toy
          })
        })
      })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  handleNewToy = (event) => {
    event.preventDefault();
    const newToy = {
      name: event.target.name,
      image: event.target.image,
      id: 20,
      likes: 0
    };
    const newToyArray = [...this.state.toys, newToy];
    this.setState({
      toys: newToyArray
    })
  }

  handleDeleteToy = (event) => {
    const parentNodeId = event.target.parentNode.id;
    console.log(parentNodeId)
    const toyArray = this.state.toys;
    const newToysArray = toyArray.filter(toy => {
      return toy.id != parentNodeId
    })
    this.setState({
      toys: newToysArray
    })
    fetch(`http://localhost:3000/toys/${parentNodeId}`, {
      method: "DELETE"
    })
  }

  handleLikeIncrease = (id) => {
    const newToyArray = this.state.toys.map(toy => {
      if (toy.id == id) {
        toy.likes++;
        return toy
      } else {
        return toy
      }
    })
    this.setState({
      toys: newToyArray
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm handleNewToy={this.handleNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer handleLikeIncrease={this.handleLikeIncrease} handleDeleteToy={this.handleDeleteToy} toys={this.state.toys}/>
      </>
    );
  }

}

export default App;
