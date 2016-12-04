import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import { IconButton } from 'react-toolbox/lib/button';
import theme from './header.scss';


export default class Header extends React.Component {
    

    render() {
        return (
            <AppBar title='Welcome' theme={theme}>
                <IconButton icon='menu' />
            </AppBar>
        );
    }
};