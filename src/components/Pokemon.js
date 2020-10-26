import React, { Component } from 'react'
import Axio from 'axios';

//tomado de https://www.epidemicjohto.com/t882-type-colors-hex-colors
const tipo={
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD'
};

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
            <div className="container">
                <div className=" row card-header">
                    <h5># {this.state.pokeIdx}</h5>
                </div>
                <div className="row">
                    <div className="col col-3">
                        <h5 className="text-capitalize text-center font-weight-bold mt-4">{this.state.name}</h5>
                        <img className="pokeAvatar" src={this.state.pokeImg}/>  
                    </div>
                    <div className="col-md-7 align-items-center mt-4">
                        <div className="row">                            
                            <div className="col">
                                <div className="row float-right">
                                <span className="font-italic font-weight-bold mr-4">Type</span>
                                <div className="justify-content-center">
                                    {this.state.types.map(type => (
                                        <span
                                            key={type}
                                            className="badge badge-primary badge-pill mr-1 text-capitalize"
                                            style={{
                                                backgroundColor: tipo[type],
                                                color: 'white'
                                            }}>
                                        {type}
                                        </span>
                                    ))}
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-3 text-uppercase text-right ">hp</div>
                            <div className="col-12 col-md-9 p-0 progress">
                                <div className="progress-bar" role="progressbar" style={{width: this.state.stats.hp+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <small>{this.state.stats.hp}</small>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-3 text-uppercase text-right">attack</div>
                            <div className="col-12 col-md-9 p-0 progress">
                                <div className="progress-bar" role="progressbar" style={{width: this.state.stats.attack+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <small>{this.state.stats.attack}</small>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-3 text-uppercase text-right">defense</div>
                            <div className="col-12 col-md-9 p-0 progress">
                                <div className="progress-bar" role="progressbar" style={{width: this.state.stats.defense+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <small>{this.state.stats.defense}</small>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-3 text-uppercase text-right">speed</div>
                            <div className="col-12 col-md-9 p-0 progress">
                                <div className="progress-bar" role="progressbar" style={{width: this.state.stats.speed+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <small>{this.state.stats.speed}</small>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-3 text-uppercase text-right">special attack</div>
                            <div className="col-12 col-md-9 p-0 progress">
                                <div className="progress-bar" role="progressbar" style={{width: this.state.stats.specialA+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <small>{this.state.stats.specialA}</small>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-3 text-uppercase text-right">special defense</div>
                            <div className="col-12 col-md-9 p-0 progress">
                                <div className="progress-bar" role="progressbar" style={{width: this.state.stats.specialD+"%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <small>{this.state.stats.specialD}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}
