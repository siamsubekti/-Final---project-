import * as React from "react";
import SignIn from '../../Modules/Login/Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import CombineReducers from "../../Modules/CombineReducers";
import AdminContainer from "../../Modules/Admin/AdminContainer";
import {createStore} from "redux";
import PostOperatorTransactionList from "../../Modules/PostOperator/component/PostOperatorTransactionList";

class Content extends React.Component {
    render() {
        return (
            <Provider store={createStore(CombineReducers)}>
                <Router>
                    <Switch>
                        <Route exact path={"/login"}><SignIn/></Route>
                        <Route path={"/"}><AdminContainer/></Route>
                        <Route path={"/post-transactions"}><PostOperatorTransactionList/></Route>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default Content;
