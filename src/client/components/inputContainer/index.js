import React from 'react';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import { connect } from 'react-redux';
import { login } from '../../actions';

import './inputContainer.scss';


import theme from './theme.scss'


function mapStateToProps(state) {;
    return {
        state
    };
};


function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        login
    }
}


class InputContainer extends React.Component {


    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };

        this.onLogin = this.onLogin.bind(this);
    }


    onLogin(e) {
        e.preventDefault();
        this.props.dispatch(this.props.login(this.state.email, this.state.password));
    }
    

    handleChange(name, value) {
        this.setState({...this.state, [name]: value});
    }


    render () {
        return (
          <div className="input-container">
            <Input
                theme={theme}
                type='email'
                value={this.state.email}
                label='Email address'
                icon='email'
                onChange={this.handleChange.bind(this, 'email')}
                required/>

            <Input
                theme={theme}
                type='password'
                value={this.state.password}
                label='Password'
                icon='lock'
                onChange={this.handleChange.bind(this, 'password')}
                required/>


            <Button label='Log In' onClick={this.onLogin} />
          </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer);
