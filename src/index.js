import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

WebFont.load({
  custom: {
    families: ['Aller'],
    urls: ['./assets/fonts/Aller_Rg.ttf']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
