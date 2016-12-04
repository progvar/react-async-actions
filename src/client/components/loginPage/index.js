import React from 'react';
import Header from '../header';
import Input from 'react-toolbox/lib/input';
import { Layout } from 'react-toolbox/lib/layout';
import { Button } from 'react-toolbox/lib/button';
import { connect } from 'react-redux';
import { login, logout } from '../../actions';


export default class LoginPage extends React.Component {
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }


    clickHandler() {
        login('Generic Béla', 'hahaha');
    }


    render() {
        return (
            <div>
                <Header />
                <Button label='Log In' onClick={this.clickHandler} />
            </div>
        );
    }
};