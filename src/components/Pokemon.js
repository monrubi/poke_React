import React, { Component } from 'react'
import Axio from 'axios';

export default class Pokemon extends Component {
    state={
        name:'',
        pokeIdx:'',
        pokeImg:'',
        types: [],
        hab: [],
        stats:{
            hp:'',
            attack:'',
            defense:'',
            specialA:'',
            specialD:'',
            speed:''
        },
        height:'',
        weight:''

    };

    async componentDidMount(){
        const {pokeIdx} = this.props.match.params;
        const infoURL = "https://pokeapi.co/api/v2/pokemon/"+pokeIdx+"/";
        const pokeRes = await Axio.get(infoURL);
        const name = pokeRes.data.name;
        const pokeImg = pokeRes.data.sprites.front_default;



        let {hp, attack, defense, specialA, specialD, speed}='';
        pokeRes.data.stats.map(stat => {
            switch(stat.stat.name){
                case 'hp':
                    hp = stat['base_stat'];
                    break;
                case 'attack':
                    attack = stat['base_stat'];
                    break;
                case 'defense':
                    defense = stat['base_stat'];
                    break;
                case 'special-attack':
                    specialA = stat['base_stat'];
                    break;
                case 'special-defense':
                    specialD = stat['base_stat'];
                    break;
                case 'speed':
                    speed = stat['base_stat'];
                    break;
            }
        });

        const height = pokeRes.data.height * 0.1;
        const weight = pokeRes.data.weight * 0.1;
        const types = pokeRes.data.types.map(type => type.type.name);
        const hab = pokeRes.data.abilities.map(ability => ability.ability.name);

        this.setState({
            pokeIdx,
            pokeImg,
            name,
            types,
            weight,
            height,
            stats:{
                hp,
                attack,
                defense,
                speed,
                specialA,
                specialD
            },
            hab
        });
    }

    render() {
        return (
            <div className="col">
                <div className="card-header">
                    <div className="row">
                        <div className="col-5">
                            {this.state.pokeIdx}
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
