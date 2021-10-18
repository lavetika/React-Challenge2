import React from "react";

function onMouseOverEvent(event, sprites) {
  event.target.src = sprites.front_default
    ? sprites.front_shiny
    : sprites.back_shiny;
}

function onMouseOutEvent(event, sprites) {
  event.target.src = sprites.front_shiny
    ? sprites.front_default
    : sprites.back_default;
}

function PokeCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <div>
        <a target="_blank" rel="noreferrer" href={props.video}>
          <img
            onMouseOver={(event) => onMouseOverEvent(event, props.sprites)}
            onMouseOut={(event) => onMouseOutEvent(event, props.sprites)}
            src={
              props.sprites.front_default
                ? props.sprites.front_default
                : props.sprites.back_default
            }
            alt="Pokemon"
          />
        </a>
      </div>
    </div>
  );
}

export default PokeCard;
