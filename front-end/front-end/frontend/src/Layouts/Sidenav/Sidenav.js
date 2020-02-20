import * as React from "react";
import {Link} from "react-router-dom";
import truck from '../../images/truck.png';
import line from '../../images/line.png';
import {menus} from "../../Constant/Constant";

class Sidenav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-new"
                 id="sidenav-main">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#sidenav-collapse-main" ariea-controls="sidenav-main" aria-expanded="false"
                            aria-label="Toggle navigation">
                    </button>
                    <div className="container">
                        <img className="alignleft" src={truck}/>
                        <h1 className="text-bar alignright">GED</h1>
                    </div>
                    <img src={line}/>
                    <ul className="nav align-items-center d-md-none">
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false">
                            </a>
                        </li>
                    </ul>
                    <div className="collapse navbar-collapse nav-background" id="sidenav-collapse-main">
                        <div className="navbar-collapse-header d-md-none">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="./index.html">
                                    </a>
                                </div>
                                <div className="col-6 collapse-close">
                                    <button type="button" className="navbar-toggler" data-toggle="collapse"
                                            data-target="#sidenav-collapse-main" aria-controls="sidenav-main"
                                            aria-expanded="false" aria-label="Toggle sidenav">
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav">
                            {menus[sessionStorage.getItem('role')].map(element => {
                                return (
                                    <li className="nav-item  active ">
                                        <Link className="nav-link  active " to={element.route}>
                                            <label className="text-nav">{element.label}</label>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Sidenav;
