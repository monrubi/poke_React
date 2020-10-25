import React, { Component } from 'react';



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
                <div className="card container">
                    <div className="row">
                        <a href="/" className="col-sm-3 font-weight-bold">
                            {this.state.pokeIdx}
                        </a>
                        <a href="/" className="col-sm-4">
                            <img alt="avatar" src={this.state.pokeImg}/>
                        </a>

                        <a href="/" className="col-sm text-right text-capitalize font-weight-normal">
                            {this.state.name}
                        </a>
                    </div>
               
                </div>
            </div>
        )
    }
}
