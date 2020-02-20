import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import LandingPage from "../../Modules/landingpage/LandingPage";
import Register from "../../Modules/register/RegisterUser";
import LandingPageUser from "../../Modules/landingpage/LandingPageUser";
import CombineReducers from "../../Modules/CombineReducers";

class Content extends React.Component {
    render() {
        return (
            <Provider store={createStore(CombineReducers)}>
                <Router>
                    <Switch>
                        <Route exact path={"/"}><LandingPage/></Route>
                        <Route path={"/register"}><Register/></Route>
                        <Route path={"/user"}><LandingPageUser/></Route>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default Content;
