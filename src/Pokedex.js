import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './css/Pokedex.css';

class Pokedex extends Component {

  render(){

    const hand = this.props.hand;
    const isWinner = this.props.isWinner


    return(
      <div className='Pokedex'>
        <h1>Pokedex hand {this.props.handNumber}</h1>
        <h2 className={isWinner ? 'Pokedex-Winner' : 'Pokedex-Loser'}>Total Experience: {this.props.totalExp} {isWinner ? 'Winner!' : 'Loser!'}</h2>
        <div className='Pokedex-cards'>
          {hand.map(p => (
            <Pokecard
              key={p.id} 
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;