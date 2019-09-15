import React from "react";
import logo from "./assets/logo_circle.png";

class DashboardSeller extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className="dashboard-container">
                <div className="sidebar">
                    <div className="logo" style={
                    {
                        backgroundImage: `url('${logo}')`
                    }
                    }>
                    </div>
                    <div className="navigation-options">
                        <h1>Campaigns</h1>
                        <h1>Usage</h1>
                        <h1>Wallet</h1>
                        <h1>Log out</h1>
                    </div>
                </div>
                <div className="workbench">
                    <h1 className="title">Campaigns</h1>
                    <h2 className="instruction">Select the type of data campaign you would like to submit your personal data to</h2>
                    <div className="card-flex">
                        <div className="card">
                            <div className="icon">
                                <i className="fas fa-route"></i>
                            </div> 
                            <h1>Commute History</h1>
                            <table cellspacing="0">
                                <tr>
                                    <th>Type</th>
                                    <td>Location</td>
                                </tr>
                                <tr>
                                    <th>Reward</th>
                                    <td>6000 ALGO</td>
                                </tr>
                            </table>
                            <button>Begin</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardSeller;