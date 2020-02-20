import * as React from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import Api from '../../Api/Api';
import * as AlertConstant from '../../Constant/AlertConstant';
import Swal from "sweetalert2";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    handleChangeUsername = (event) => {
        const username = event.target.value;
        this.props.dispatch({type: 'LOGIN_SUCCESS', login: {...this.props.login, userName: username}})
    }

    handleChangePassword = (event) => {
        const password = event.target.value;
        this.props.dispatch({type: 'LOGIN_SUCCESS', login: {...this.props.login, password: password}})
    }

    onSubmit = (event) => {
        const {login} = this.props;
        console.log("SUBMIT", login)
        event.preventDefault();
        Api.post('authenticate', {
            userName: this.props.login.userName,
            password: this.props.login.password
        }).then(res => {
            console.log('res', res);
            if (res.status === 200) {
                sessionStorage.setItem('userInfo', res.data.jwt);
                sessionStorage.setItem('role', res.data.role.pop().roleName);
                sessionStorage.setItem('userId', res.data.idUser);
                this.props.dispatch({
                    type: 'SAVE_TRANSACTION', addTransaction: {
                        ...this.props.addTransaction, operator: {
                            ...this.props.addTransaction.operator,
                            id: res.data.idUser
                        }
                    }
                });
                this.setState({redirect: true});
                AlertConstant.status_success_200("Login Success");
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    };

    componentDidMount() {
        localStorage.clear();
    }


    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/admin'/>
        }
        return (
            <body style={{minHeight: '900px'}} className="bg-gradient-primary">
            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9" style={{marginTop: '200px'}}>
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">

                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="4 text-gray-900">Login</h1>
                                                <p>as a Staff</p>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-user"
                                                           id="exampleInputEmail" onChange={this.handleChangeUsername}
                                                           aria-describedby="emailHelp"
                                                           placeholder="Enter Username..."/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                           id="exampleInputPassword"
                                                           onChange={this.handleChangePassword}
                                                           placeholder="Enter Password..."/>
                                                </div>
                                                <button className="btn btn-primary btn-user btn-block"
                                                        onClick={this.onSubmit}>Login
                                                </button>
                                                <div className="text-center p-1">
                                                    <a className="small" href="http://localhost:3000">Go to Home</a>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </body>

        )
    }
}

function mapStateToProps(state) {
    return {...state.login, ...state.transaction}
}

export default connect(mapStateToProps)(Login)
