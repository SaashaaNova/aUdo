import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import LogIn from './components/LogInPage/LogInPage';
import './index.scss'
import {
    HashRouter,
    Route
} from 'react-router-dom';

const Routing = <HashRouter>
    <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LogIn} />
    </div>

</HashRouter>

ReactDOM.render(Routing, document.getElementById('root'));


