import * as React from "react";
import {Redirect} from "react-router-dom";
import Api from "../../Api/Api";
import {connect} from 'react-redux';
import * as AlertConstant from '../../Constant/AlertConstant';

class ModalLoginUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    handleChangeUsername = (event) => {
        const username = event.target.value;
        this.props.dispatch({type: 'LOGIN_SUCCESS', login: {...this.props.login, userName: username}})
    };

    handleChangePassword = (event) => {
        const password = event.target.value;
        this.props.dispatch({type: 'LOGIN_SUCCESS', login: {...this.props.login, password: password}})
    };

    onSubmit = (event) => {
        const {login} = this.props;
        console.log("SUBMIT", login);
        event.preventDefault();
        Api.post('authenticate', {
            userName: this.props.login.userName,
            password: this.props.login.password
        }).then((res, req) => {
            console.log('res', res);
            if (res.status === 200) {
                sessionStorage.setItem('userInfo', res.data.jwt);
                sessionStorage.setItem('role', res.data.role.pop().roleName);
                sessionStorage.setItem('userId', res.data.idUser);
                this.setState({redirect: true});
                AlertConstant.status_success_200("Login Success");
                window.location.reload(false);

            }
        })
            .catch(function (error) {
                // this.props.dispatch({type: 'RESET_STATE'});
                AlertConstant.loginError("Login Failed!");
            });
    };

    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/user'/>
        }
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Username</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp" placeholder="Enter Username..."
                                               onChange={this.handleChangeUsername}/>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                               placeholder="Enter Password..."
                                               onChange={this.handleChangePassword}/>
                                    </div>
                                </form>
                            </div>
                            <div className="text-center">
                                <a href="/register" className="small">Don't have an account? Create an Account</a>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                >Close
                                </button>
                                <button onClick={this.onSubmit} type="button" data-dismiss="modal"
                                        className="btn btn-primary">Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {...state.login}
}

export default connect(mapStateToProps)(ModalLoginUser)
