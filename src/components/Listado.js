import React, { Component } from 'react';
import Resultado from './Resultado';
import Axio from 'axios';

export default class Listado extends Component {
    state = {
        url: 'https://pokeapi.co/api/v2/pokemon?offset=00&limit=893',
        pokemon: null
    };

    async componentDidMount(){
        const resp = await Axio.get(this.state.url);
        this.setState({ pokemon: resp.data['results']});
    };

    render() {
        return (
            <React.Fragment>
                {this.state.pokemon ? (
                <div className= "row">
                    {this.state.pokemon.map(pokemon => (
                        <Resultado 
                        key ={pokemon.id}
                        name={pokemon.name}
                        url={pokemon.url}/>
                    ))}
                </div>
                ):(
                    <h1>Loading</h1>
                )}
            </React.Fragment>

        )
    }
}
