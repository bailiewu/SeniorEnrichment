import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import store from './store'
import { Provider } from 'react-redux'
import Campuses from './Campuses'
import Students from './Students'


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Route render={(props) => <Nav {...props} />} />
                    <Route exact path="/" render={() => <Redirect to="/campuses" />} />
                    <Route exact path="/campuses" component={Campuses} />
                    <Route exact path="/students" component={Students} />

                </HashRouter>
            </Provider>
        )
    }
}

