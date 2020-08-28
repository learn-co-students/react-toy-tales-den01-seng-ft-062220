import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  const { toys } = props

  return(
    <div id="toy-collection">
      {toys.map(toy => <ToyCard handleLikeIncrease={props.handleLikeIncrease} handleDeleteToy={props.handleDeleteToy} toy={toy}/>)}
    </div>
  );
}

export default ToyContainer;
