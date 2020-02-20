import React from "react";
import {connect} from 'react-redux';
import * as PostOperatorServices from '../services/PostOperatorService';
import '../Styles/Style.css';
import * as AlertConstant from '../../../Constant/AlertConstant';

class PostOperatorTransactionForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const {addTransaction} = this.props;
        console.log("TRX", this.props);
        PostOperatorServices.save(addTransaction)
            .then(resp => {
                AlertConstant.status_success_200("Transaction Success");
            })
            .catch(err => {
                console.log('resp: ', err.resp);
                AlertConstant.status_internal_server_error_500("Transaction Failed");
            })
    }

    handleChangeOriginName = (event) => {
        const value = event.target.value;
        PostOperatorServices.findUserByName(value).then((r) =>
            this.props.dispatch({
                type: 'FIND_USER_BY_NAME',
                findUserByName: r
            })
        );

        PostOperatorServices.findUserByName(value).then((r) =>
            r.map((user) => {
                return (this.props.dispatch({
                    type: 'SAVE_TRANSACTION',
                    addTransaction: {...this.props.addTransaction, email: user.email}
                }))
            })
        );

        this.props.dispatch({
            type: 'SAVE_TRANSACTION',
            addTransaction: {...this.props.addTransaction, originName: value}
        })
    };

    handleChangeDestinationName = (event) => {
        const value = event.target.value;
        this.props.dispatch({
            type: 'SAVE_TRANSACTION',
            addTransaction: {...this.props.addTransaction, destinationName: value}
        })
    };

    handleChangeEmail = (event) => {
        const value = event.target.value;
        this.props.dispatch({
            type: 'SAVE_TRANSACTION',
            addTransaction: {...this.props.addTransaction, email: value}
        })
    };

    handleChangeOriginLocation = (event) => {
        const value = event.target.value;
        this.props.dispatch({
            type: 'SAVE_TRANSACTION',
            addTransaction: {
                ...this.props.addTransaction, originAddress: {
                    ...this.props.addTransaction.originAddress,
                    addressLocations: {
                        ...this.props.addTransaction.originAddress.addressLocations,
                        id: value
                    }
                }
            }
        })
    };

    handleChangeDestinationLocation = (event) => {
        const value = event.target.value;
        this.props.dispatch({
            type: 'SAVE_TRANSACTION',
            addTransaction: {
                ...this.props.addTransaction, destinationAddresses: {
                    ...this.props.addTransaction.destinationAddresses,
                    addressLocations: {
                        ...this.props.addTransaction.destinationAddresses.addressLocations,
                        id: value
                    }
                }
            }
        })
    };

    handleChangeOriginAddressDesc = (event) => {
        const value = event.target.value;
        this.props.dispatch({
            type: 'SAVE_TRANSACTION',
            addTransaction: {
                ...this.props.addTransaction,
                originAddress: {
                    ...this.props.addTransaction.originAddress,
                    descriptions: value
                }
            }
        })
    };


    handleChangeDestinationAddressDesc = (event) => {
        const value = event.target.value;
        this.props.dispatch({
            type: 'SAVE_TRANSACTION',
            addTransaction: {
                ...this.props.addTransaction,
                destinationAddresses: {
                    ...this.props.addTransaction.destinationAddresses,
                    descriptions: value
                }
            }
        })
    };


    handleChangePackageName = (event) => {
        const value = event.target.value;
        this.props.dispatch({
            type: 'SAVE_TRANSACTION',
            addTransaction: {
                ...this.props.addTransaction, packages: {
                    ...this.props.addTransaction.packages,
                    itemName: value
                }
            }
        })
    };

    handleChangePackageWeight = (event) => {
        const value = event.target.value;
        this.props.dispatch({
            type: 'SAVE_TRANSACTION',
            addTransaction: {
                ...this.props.addTransaction,
                packages: {
                    ...this.props.addTransaction.packages,
                    weight: value
                }
            }
        })
    };

    TransactionLoad() {
        const {dispatch, loading, locations} = this.props;
        console.log('load locations', locations);
        PostOperatorServices.listLocation()
            .then((locations) => {
                dispatch({type: 'LIST_LOCATION', loading, locations});
            })
            .catch((err) => {
                dispatch({type: 'LIST_LOCATION', loading, locations: []});
            });
        console.log("GET", locations);
    }

    UsersLoad() {
        const {dispatch, loading, users} = this.props;
        console.log('load users', users);
        PostOperatorServices.listUser()
            .then((users) => {
                dispatch({type: 'LIST_USER', loading, users});
            })
            .catch((err) => {
                dispatch({type: 'LIST_USER', loading, users: []});
            });
    }


    componentDidMount() {
        if (this.props.loading) {
            this.TransactionLoad();
            this.UsersLoad();
        }
    }

    render() {
        return (
            <div className="my-margin">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-md-10 mx-auto">
                                    <h1 className="form">Form Transaction</h1>
                                    <hr className="bottom"/>
                                    <form>
                                        <div className="form-group row">
                                            <div className="col-sm-6">
                                                <h2 className="bottom">Sender Information</h2>
                                                <label htmlFor="inputFirstname">Name</label>
                                                <input type="text" list="name"
                                                       className="form-control"
                                                       placeholder="Enter Name.."
                                                       onChange={this.handleChangeOriginName}/>
                                                <datalist id="name">
                                                    {this.props.users.map((user) => {
                                                        const name = user.userName;
                                                        return (<option value={name}/>)
                                                    })}
                                                </datalist>
                                            </div>

                                            <div className="col-sm-6">
                                                <h2 className="bottom">Recipient Information</h2>
                                                <label htmlFor="inputLastname">Name</label>
                                                <input type="text" className="form-control"
                                                       placeholder="Enter Name.."
                                                       onChange={this.handleChangeDestinationName}/>

                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6">
                                                <label htmlFor="inputCity">District</label>
                                                <select className="custom-select mr-sm-3" id="type-menu"
                                                        onChange={this.handleChangeOriginLocation}>
                                                    <option selected>Choose District</option>
                                                    {this.props.locations.map((loc) => {
                                                        return (<option value={loc.id}>{loc.name}</option>)
                                                    })}
                                                </select>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="inputCity">District</label>
                                                <select className="custom-select mr-sm-3" id="type-menu"
                                                        onChange={this.handleChangeDestinationLocation}>
                                                    <option selected>Choose District</option>
                                                    {this.props.locations.map((loc) => {
                                                        return (<option value={loc.id}>{loc.name}</option>)
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6">
                                                <label htmlFor="inputAddressLine1">Address</label>
                                                <input type="text" className="form-control" id="inputAddressLine1"
                                                       placeholder="Street Address"
                                                       onChange={this.handleChangeOriginAddressDesc}/>
                                            </div>
                                            <div className="col-sm-6">
                                                <label htmlFor="inputAddressLine2">Address</label>
                                                <input type="text" className="form-control" id="inputAddressLine2"
                                                       placeholder="Street Address"
                                                       onChange={this.handleChangeDestinationAddressDesc}/>
                                            </div>
                                        </div>


                                        <div className="form-group row">
                                            <div className="col-sm-6">
                                                <label htmlFor="inputAddressLine1">Email</label>
                                                <input type="text" className="form-control"
                                                       id="inputAddressLine1"
                                                       placeholder="Enter Email..."
                                                       list="email"
                                                       onChange={this.handleChangeEmail}/>

                                                <datalist id="email">
                                                    {this.props.users.map((user) => {
                                                        return (<option value={user.email}/>)
                                                    })}
                                                </datalist>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col">
                                                <h2 className="bottom">Package Information</h2>
                                                <label>Package Name</label>
                                                <input type="text" className="form-control" placeholder="Package Name"
                                                       onChange={this.handleChangePackageName}/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col">
                                                <label>Package Weight</label>
                                                <input type="number" className="form-control"
                                                       placeholder="Package Weight"
                                                       onChange={this.handleChangePackageWeight}/>
                                            </div>
                                        </div>
                                        <button type="submit"
                                                className="btn btn-outline-warning btn-user btn-block"
                                                onClick={this.handleSubmit}>
                                            Save Transaction
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {...state.transaction}
}

export default connect(mapStateToProps)(PostOperatorTransactionForm);
