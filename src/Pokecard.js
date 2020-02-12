import React, {Component} from 'react';
import './css/Pokecard.css';

class Pokecard extends Component {
  render() {
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`
  const imageAlt = `Image of ${this.props.name}` 
    return(
      <div className='Pokecard'>
        <h3 className='Pokecard-Name'>{this.props.name}</h3>
        <img src={image} alt={imageAlt}/>
        <p>Type: {this.props.type}</p>
        <p>Experience: {this.props.exp}</p>
      </div>
    );
  }
}

export default Pokecard;

//Name image type & Experience