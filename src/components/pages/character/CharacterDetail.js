import React from "react";

// Style
import "./style/CharactersDetail.scss";

const ProductDetail = ({ character }) => {
  const { origin, location, name, image, episode, gender} = character

  return (
    <div className="containerDetail">
      {character && Object.keys(character).length > 0 && 
      <><div className="containerDetail-title">Detalle</div><img
        className="containerDetail-picture"
        src={image}
        alt={name} /><div
          className="containerDetail-name"
        > {character && character.name} </div><ul
          className="containerDetail-list"
        >
          <li>{gender}</li>
          <li>{origin && origin.name}</li>
          <li>{location && location.name}</li>
          <li>Number of episodes: {episode && episode.length}</li>
        </ul></>}
    </div>
  );
};

ProductDetail.defaultProps = {
  character: {},
};

export default ProductDetail;
