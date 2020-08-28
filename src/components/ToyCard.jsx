import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    const toy = this.props.toy
    return (
      <div key={toy.id} id={toy.id} className="card">
        <h2>{toy.name}</h2>
        <img src={toy.image} alt={toy.name} className="toy-avatar" />
        <p>{toy.likes} Likes </p>
        <button onClick={() => this.props.handleLikeIncrease(toy.id)} className="like-btn">Like {'<3'}</button>
        <button onClick={event => this.props.handleDeleteToy(event)} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
