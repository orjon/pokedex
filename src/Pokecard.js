import React, {Component} from 'react';
import './css/Pokecard.css';

class Pokecard extends Component {
  render() {
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`

  let padToThree = number => (number <= 999 ? `00${number}`.slice(-3): number)

  const paddedId = padToThree(this.props.id)

  const imageHighRes = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`
  
  const imageAlt = `Image of ${this.props.name}` 
    return(
      <div className='Pokecard'>
        <h3 className='Pokecard-Name'>{this.props.name}</h3>
        <img src={imageHighRes} alt={imageAlt}/>
        <p>Type: {this.props.type}</p>
        <p>Experience: {this.props.exp}</p>
      </div>
    );
  }
}

export default Pokecard;

//Name image type & Experience