import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Resultado extends Component {
    state ={
        name: '',
        imageUrl:'',
        pokeIdx:''
    };

    componentDidMount(){
        const name = this.props.name;
        const url = this.props.url;
        const pokeIdx = url.split("/")[url.split("/").length-2];
        const pokeImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokeIdx+".png"

        this.setState({name: name, pokeImg: pokeImg, pokeIdx: pokeIdx});
    };

    render() {

        return (
            <div className="col-md-3 col-sm-6 nb-5">
                <Link to={"pokemon/"+this.state.pokeIdx}>
                    <div className="card container">
                        <div className="row align-items-center">
                            <a href="/" className="col-sm-6">
                                <img alt="avatar" src={this.state.pokeImg}/>
                            </a>
                            <div className="col ">
                                <a href="/" className="row font-weight-bold">
                                    {this.state.pokeIdx}
                                </a>
                                <a href="/" className="row text-right text-capitalize font-weight-normal">
                                    {this.state.name}
                                </a>
                            </div>

                        </div>
                
                    </div>
                </Link>
            </div>
        )
    }
}
