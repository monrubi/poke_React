import React, { Component } from 'react'
import Axio from 'axios';

export default class Pokemon extends Component {
    state={
        name:'',
        pokeIdx:'',
        pokeImg:'',
        types: [],
        hab: [],
        desc: '',
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
        this.setState({
            name
        });
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
