import React from "react";
import {connect} from 'react-redux';
import * as AdminServices from '../service/AdminService';

class ListUser extends React.Component {

    UserLoad() {
        const {dispatch, users} = this.props;
        AdminServices.listUser()
            .then((users) => {
                dispatch({type: 'LIST_USER_SUCCESS', users});
            })
            .catch((err) => {
                dispatch({type: 'LIST_USER_SUCCESS', users: []});
            })
    }

    componentDidMount() {
        if (this.props.loading) {
            this.UserLoad();
        }
    }

    render() {
        return (
            <div className="my-margin">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h3>List Users</h3>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%"
                                   cellSpacing="0">
                                <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Email</th>
                                    <th>Roles</th>
                                </tr>
                                </thead>
                                {this.props.listUser.map((user, i) => {
                                    return (
                                        <tbody>
                                        <td width="10px">{i + 1}</td>
                                        <td>{user.userName}</td>
                                        <td>{user.password}</td>
                                        <td>{user.email}</td>
                                        {user.roles.map((role, i) => {
                                            return (
                                                <td>{role.roleName}</td>
                                            )
                                        })}
                                        </tbody>
                                    )
                                })}
                            </table>
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


export default connect(mapStateToProps)(ListUser);
