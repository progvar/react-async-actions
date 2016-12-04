import React from 'react';
import Header from '../header';
import Input from 'react-toolbox/lib/input';
import { Layout } from 'react-toolbox/lib/layout';
import { Button } from 'react-toolbox/lib/button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../actions';


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


class LoginPage extends React.Component {
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }


    clickHandler(e) {
        e.preventDefault();
        this.props.dispatch(this.props.login('Generic Béla', 'hahaha'));
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
