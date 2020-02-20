import React from "react";
import {connect} from 'react-redux';
import * as AdminServices from '../service/AdminService';
import * as AlertConstant from '../../../Constant/AlertConstant';
import '../../../style/css/argon-dashboard.css';

class UsersForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const {addUser} = this.props;
        console.log("ADMIN", this.props);
        AdminServices.save(addUser)
            .then(resp => {
        AlertConstant.status_success_200("Save User Success Success");
            })
            .catch(err => alert("Save Error"))
    }

    handleChangeUsername = (event) => {
        const value = event.target.value;
        this.props.dispatch({type: 'SAVE_USER', addUser: {...this.props.addUser, userName: value}})
    }

    handleChangePassword = (event) => {
        const value = event.target.value;
        this.props.dispatch({type: 'SAVE_USER', addUser: {...this.props.addUser, password: value}})
    }

    handleChangeEmail = (event) => {
        const value = event.target.value;
        this.props.dispatch({type: 'SAVE_USER', addUser: {...this.props.addUser, email: value}})
    }

    handleChangeRoles = (event) => {
        const value = event.target.value;
        this.props.dispatch({
            type: 'SAVE_USER', addUser: {
                ...this.props.addUser,
                roles: this.props.addUser.roles.concat({id: value})
            }
        })
    }

    render() {
        console.log("STATE AFTER", this.props.addUser);
        return (
            <div className="my-margin">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <div className="container py-5">
                            <h1>Form User</h1>
                            <form className="user">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control form-control-user"
                                           placeholder="Enter Username. . ."
                                           name="userName"
                                           onChange={this.handleChangeUsername}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text" className="form-control form-control-user"
                                           placeholder="Enter Password. . ."
                                           name="password"
                                           onChange={this.handleChangePassword}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control form-control-user"
                                           placeholder="Enter Email. . ."
                                           name="email"
                                           onChange={this.handleChangeEmail}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Roles</label>
                                    <select onChange={this.handleChangeRoles}
                                            className="custom-select mr-sm-3" id="type-menu">
                                        <option selected>Choose Roles</option>
                                        <option value="1">Admin</option>
                                        <option value="2">Post Operator</option>
                                        <option value="3">Post Storages</option>
                                        <option value="4">Courier</option>
                                        <option value="5">User</option>
                                    </select>
                                </div>
                                <div className="form-group col">
                                    <button type="button"
                                            className="btn btn-google btn-outline- btn-user btn-block">
                                        Cancel
                                    </button>
                                    <button type="submit"
                                            className="btn btn-outline-warning btn-user btn-block"
                                            onClick={this.handleSubmit}>
                                        Save User
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {...state.admin}
}

export default connect(mapStateToProps)(UsersForm);
