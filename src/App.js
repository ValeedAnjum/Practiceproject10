import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import Header from './components/header/Header';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ModelManager from './components/models/ModelManager';
import Home from './components/home/Homen';
import Card from './components/card/Card';

function App() {
    return (
        <BrowserRouter>
            <ReduxToastr position="bottom-right" transitionIn="fadeIn" transitionOut="fadeOut" />
            <Header/>
            <ModelManager />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/card" component={Card} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
