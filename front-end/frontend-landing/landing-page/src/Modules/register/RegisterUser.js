import * as React from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import * as UserServices from './service/LandingPageRegisterService';
import * as AlertConstant from '../../Constant/AlertConstant';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const {addUser} = this.props;
        console.log("ADMIN", this.props);
        UserServices.save(addUser)
            .then(resp => {
                this.setState({redirect: true});
                AlertConstant.status_success_200("Register Success");
            })
            .catch(err => AlertConstant.registerError("Register Failed!"))
    }

    handleChangeUsername = (event) => {
        const value = event.target.value;
        this.props.dispatch({type: 'SAVE_USER', addUser: {...this.props.addUser, userName: value}})
        this.props.errors.userName =
            value.length < 5
                ? 'Full Name must be 5 characters long!'
                : '';
    };


    handleChangePassword = (event) => {
        const value = event.target.value;
        this.props.dispatch({type: 'SAVE_USER', addUser: {...this.props.addUser, password: value}})
        this.props.errors.password =
            value.length < 8
                ? 'Password must be 8 characters long!'
                : '';

    };

    handleChangeEmail = (event) => {
        const value = event.target.value;
        this.props.dispatch({type: 'SAVE_USER', addUser: {...this.props.addUser, email: value}})
        this.props.errors.email =
            validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
    };

    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/user'/>
        }
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0 marginTop">
                                <div className="row">
                                    <div className="col-lg-5 d-none d-lg-block bg-register-image">
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-user"
                                                           id="exampleFirstName" placeholder="Username"
                                                           onChange={this.handleChangeUsername} required/>
                                                    {this.props.errors.userName.length > 0 &&
                                                    <span className='error'>{this.props.errors.userName}</span>}
                                                </div>
                                                <div className="form-group">
                                                    <input className="form-control form-control-user"
                                                           id="exampleInputEmail" placeholder="Email Address"
                                                           onChange={this.handleChangeEmail}
                                                           pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                                                           required/>
                                                    {this.props.errors.email.length > 0 &&
                                                    <span className='error'>{this.props.errors.email}</span>}
                                                </div>
                                                <div className="form-group">
                                                    <input type="password"
                                                           className="form-control form-control-user"
                                                           id="exampleInputPassword" placeholder="Password"
                                                           onChange={this.handleChangePassword} required/>
                                                    {this.props.errors.password.length > 0 &&
                                                    <span className='error'>{this.props.errors.password}</span>}
                                                </div>
                                                <button onClick={this.handleSubmit}
                                                        className="btn btn-primary btn-user btn-block">Register
                                                    Account
                                                </button>
                                            </form>
                                            <hr/>
                                            <div className="text-center">
                                                <a href="/" className="small">Already have an account?
                                                    Login!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const validEmailRegex =
    RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        // if we have an error string set valid to false
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

function mapStateToProps(state) {
    return {...state.register}
}

export default connect(mapStateToProps)(Register);
