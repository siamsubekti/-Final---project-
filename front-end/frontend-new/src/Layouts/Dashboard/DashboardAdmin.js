import * as React from "react";
import '../../style/css/argon-dashboard.css';

class DashboardAdmin extends React.Component {
    render() {
        return (
            <div className="my-margin">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <div className="container py-5">
                            <h3>Welcome Admin!</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardAdmin;
