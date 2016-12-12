import React from 'react';
import Header from '../header';
import InputContainer from '../inputContainer';

import './loginPage.scss';


export default class LoginPage extends React.Component {


    render() {
        return (
            <div>
                <Header />
                <div className="login-page">
                    <InputContainer />
                </div>
            </div>
        );
    }
};
