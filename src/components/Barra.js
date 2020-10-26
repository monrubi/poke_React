import React, { Component } from 'react'
import logo from '../pokeLogo.png';

export default class Barra extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
                    <div className="container">
                        <div className="row justify-content-start">
                            <img className="logoNav" alt="pokedex" src={logo}/>
                        </div>
                    </div>

                </nav>
            </div>
        )
    }
}
