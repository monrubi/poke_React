import React, { Component } from 'react'
import Styled from 'styled-components';

export default class Barra extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
                    <a>Pokedex</a>
                </nav>
            </div>
        )
    }
}
