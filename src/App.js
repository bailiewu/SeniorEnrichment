import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Nav from './Nav';
import store from './store'
import { Provider } from 'react-redux'
import Campuses from './Campuses'
import Students from './Students'
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Route render={(props) => <Nav {...props} />} />
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/campuses" />} />
                        <Route exact path="/campuses" component={Campuses} />
                        <Route exact path="/campuses/:id" component={SingleCampus} />
                        <Route exact path="/students" component={Students} />
                        <Route exact path="/students/:id" component={SingleStudent} />
                        <Route render={() => {
                            return <div>This page does not exist. <a href="/">Click here to go to Home.</a></div>
                        }} />
                    </Switch>
                </HashRouter>
            </Provider>
        )
    }
}

