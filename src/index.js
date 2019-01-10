import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignInPage from './components/SignInPage/SignInPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import DashboardAllComponents from './components/Dashboard/DashboardAllComponents';
import './index.scss'
import {
    HashRouter,
    Route
} from 'react-router-dom';


const Routing = <HashRouter>
    <div>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/dashboard" component={DashboardAllComponents} />
    </div>

</HashRouter>

ReactDOM.render(Routing, document.getElementById('root'));


