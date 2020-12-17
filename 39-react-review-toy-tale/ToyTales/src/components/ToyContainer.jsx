import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {
        props.toys.map(toy =>
          <ToyCard
            key={toy.id}
              toy={toy}
                removeToy={props.removeToy}
                  likeThisToy={props.likeThisToy} />
        )
      }
    </div>
  );
}

export default ToyContainer;