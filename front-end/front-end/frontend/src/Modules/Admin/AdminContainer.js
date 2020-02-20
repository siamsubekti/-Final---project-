import React from 'react';
import Sidenav from "../../Layouts/Sidenav/Sidenav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PostOperatorForm from "../PostOperator/component/PostOperatorTransactionForm";
import ListUser from "./components/ListUser";
import UsersForm from "./components/UsersForm";
import Header from "../../Layouts/Header/Header";
import PostOperatorTransactionList from "../PostOperator/component/PostOperatorTransactionList";
import DashboardAdmin from "../../Layouts/Dashboard/DashboardAdmin";


class AdminContainer extends React.Component {
    render() {
        return (
            <Router>
                <div id="page-top">
                    <div id="wrapper">
                        <div id="content-wrapper" className="d-flex flex-column">
                            <Header/>
                            <div id="content">
                                <Sidenav/>
                                <div className="container-fluid">
                                    <Switch>
                                        <Route path={"/dashboard-admin"}><DashboardAdmin/></Route>
                                        <Route path={"/add-user"}><UsersForm/></Route>
                                        <Route path={"/add-transaction"}><PostOperatorForm/></Route>
                                        <Route path={"/list-transaction"}><PostOperatorTransactionList/></Route>
                                        <Route path={"/list-user"}><ListUser/></Route>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default AdminContainer;
