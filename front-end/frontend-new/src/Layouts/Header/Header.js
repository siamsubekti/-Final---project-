import * as React from "react";
import './Styles/Style.css';
import * as AlertConstant from "../../Constant/AlertConstant";
import '../../style/css/argon-dashboard.css';
import AuthService from "../../Modules/Login/service/AuthService";

class Header extends React.Component {

    handleLogout = () => {
        AuthService.logOut().then(r => AlertConstant.status_success_200("Logout Success")
        );
    };

    render() {
        return (
            <div className="header">
                <div className="card shadow mb-4 head-card">
                    <button type="button" className="btn button alignright-header" onClick={this.handleLogout}><a
                        className="href" href="/login">Logout</a>
                    </button>
                </div>
            </div>
        )
    }
}

export default Header;
