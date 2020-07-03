import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.min"
import './style.scss';
// eslint-disable-next-line import/no-unresolved,import/no-webpack-loader-syntax
import 'expose-loader?exposes[]=$&exposes[]=THREE!three';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Index/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
