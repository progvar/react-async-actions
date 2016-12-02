import React from 'react';
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
            <Button label="Log In" onClick={this.clickHandler}/>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
