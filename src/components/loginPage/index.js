import React from 'react';
import { Button } from 'react-toolbox/lib/button';
import { connect } from 'react-redux';
import { login, logout } from '../../actions';


export default class LoginPage extends React.Component {
    render() {
        return (
            <Button label="Log In" />
        );
    }
};