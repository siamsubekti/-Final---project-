import React from "react";
import {connect} from "react-redux";
import * as PostOperatorService from "../services/PostOperatorService";
import {QRCode} from "react-qr-svg";

class PostOperatorTransactionList extends React.Component {

    TransactionsLoad() {
        const {dispatch, loading, listTransaction} = this.props;
        PostOperatorService.listTransactions()
            .then((listTransaction) => {
                dispatch({type: 'LIST_TRANSACTION', loading, listTransaction});
                console.log("TRX", listTransaction);
            })
            .catch((err) => {
                dispatch({type: 'LIST_TRANSACTION', loading, listTransaction: []});
            })
    }

    componentDidMount() {
        if (this.props.loading) {
            this.TransactionsLoad();
        }
    }

    render() {
        return (
            <div className="my-margin">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h3>List Transaction</h3>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name of the Sender</th>
                                    <th>Recipient's Name</th>
                                    <th>Address Origin</th>
                                    <th>Address Destination</th>
                                    <th>Package Name</th>
                                    <th>Package Weight</th>
                                    <th>Total Price</th>
                                    <th>QR Code</th>
                                </tr>
                                </thead>
                                {this.props.listTransaction.map((trans, index) => {
                                    return (
                                        <tbody>
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{trans.originName}</td>
                                            <td>{trans.destinationName}</td>
                                            <td>{trans.originAddress.addressLocations.name}</td>
                                            <td>{trans.destinationAddresses.addressLocations.name}</td>
                                            <td>{trans.packages.itemName}</td>
                                            <td>{trans.packages.weight}</td>
                                            <td>{new Intl.NumberFormat('ja-Jp', {
                                                style: 'currency',
                                                currency: 'IDR'
                                            }).format(trans.totalPrice)}</td>
                                            <td>
                                                <QRCode
                                                    bgColor="#FFFFFF"
                                                    fgColor="#000000"
                                                    level="Q"
                                                    style={{width: 80}}
                                                    value={trans.id}
                                                />
                                            </td>
                                        </tr>
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

const mapStateToProps = (state) => {
    return {...state.transaction}
}

export default connect(mapStateToProps)(PostOperatorTransactionList);
