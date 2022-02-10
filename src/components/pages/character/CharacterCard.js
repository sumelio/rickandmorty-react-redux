import React, { useCallback } from "react";

// Component
import Button from "./../../common/Button";
import Status from "./Status";

// Style
import "./style/CharactersCard.scss";

const CharacterCard = ({
  character,
  setCharacter
}) => {
  const { image, name, status, species } = character

const selectedCharacter = useCallback((e) => {
  e.preventDefault()
  setCharacter(character)

}, [setCharacter, character])

  return (
    <div className="containerCard">
      <img className="containerCard-picture" src={image} alt={character.name} />
      <div className="containerCard-detail">
        <div className="containerCard-detail-name">{name}</div>
        <div className="containerCard-detail-status">
          <Status status={status}></Status>
          <span className="containerCard-detail-status-text">{status}</span>
        </div>
        <div className="containerCard-detail-species">{species}</div>
        <div className="containerCard-detail-button">
          <Button size="small" content="Detalle" type='none' onClick={selectedCharacter} />
        </div>
      </div>
    </div>
  );
};

CharacterCard.defaultProps = {
  character: {}
};

export default CharacterCard
