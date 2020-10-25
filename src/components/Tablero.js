import React, { Component } from 'react';
import Listado from './Listado';

export default class Tablero extends Component {
    render() {
        return (
            <div className="row">
                <div className ="column">
                    <Listado />
                </div>
            </div>
        )
    }
};
