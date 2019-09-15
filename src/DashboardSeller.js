import React from "react";
import logo from "./assets/logo_circle.png";

import WorkbenchTransactionCard from "./WorkbenchTransactionCard";
import WorkbenchFlowCard from "./WorkbenchFlowCard";

class DashboardSeller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            transactionData: {
                algorandId: props.algorandId,
                balance: props.balance,
                transactions: props.transactions
            },
            campaigns: [
                {
                    icon: `fas fa-route`,
                    title: `Commute History`,
                    type: `Passive`,
                    reward: 6750,
                    onBegin: null
                },
                {
                    icon: `fas fa-traffic-light`,
                    title: `Streetlighting Survey`,
                    type: `Active`,
                    reward: 11000,
                    onBegin: null
                },
                {
                    icon: `fas fa-taxi`,
                    title: `Ridesharing History`,
                    type: `Passive`,
                    reward: 8890,
                    onBegin: null
                },
                
            ]
        }
        this.switchTab = this.switchTab.bind(this);
    }

    render = () => {

        let workbenchComponent;

        if (this.state.activeTab === 0)
            workbenchComponent = this.renderWorkbench0();
        else if (this.state.activeTab === 1)
            workbenchComponent = this.renderWorkbench1();
        else if (this.state.activeTab === 3)
            workbenchComponent = this.renderWorkbench3();


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
                        <h1 onClick={(e) => this.switchTab(0)}>Campaigns</h1>
                        <h1 onClick={(e) => this.switchTab(1)}>Wallet</h1>
                        <h1 onClick={(e) => this.props.onLogout(e)}>Log out</h1>
                    </div>
                </div>
                <div className="workbench">
                    {workbenchComponent}
                </div>
            </div>
        )
    }

    switchTab = (tab) => {
        this.setState({
            activeTab: tab
        })
    }

    renderWorkbench0 = () => (
        <>
            <h1 className="title">Campaigns</h1>
                <h2 className="instruction">Select the type of data campaign you would like to submit your personal data to</h2>
                <div className="card-flex">
                    {
                        this.state.campaigns.map((campaign, i) => (
                            <WorkbenchFlowCard
                                key={i}
                                icon={campaign.icon}
                                title={campaign.title}
                                type={campaign.type}
                                reward={campaign.reward}
                                onBegin={(e) => this.switchTab(3)}
                            />
                        )) 
                    }
                </div>
            </>
        )

        renderWorkbench1 = () => (
            <>
                <h1 className="title">Wallet Details</h1>
                <div className="card-flex">
                    <div className="micro-card width-70">
                        <h3 className="company">Algorand ID</h3> <h1 className="crypto">{this.state.transactionData.algorandId}</h1>
                    </div>
                    <div className="micro-card">
                        <h3 className="company">Balance</h3> <h1>{this.state.transactionData.balance}</h1><h1 className="currency">ALGO</h1>
                    </div>
                </div>
                
                <hr/>
                <h1 className="title">Transactions</h1>
                <div className="card-flex low-padding">
                    {
                        this.state.transactionData.transactions.map((transaction, i) => (
                            <WorkbenchTransactionCard key={i} companyName={transaction.name} amount={transaction.amount}/>
                        ))
                    }
                    
                </div>
            </>
        )

        renderWorkbench3 = () => {
            return (
                <div className="file-uploader">
                    <h1 className="title">Submit data to Commute History data campaign</h1>
                    <div className="upload-segment">
                        <div className="upload-container">
                        <label className="custom-file-upload">
                            <input type="file" id="file" aria-label="File browser example"/>
                            <span className="file-custom"></span>
                            <button className="normal-button" onClick={(e) => this.switchTab(0)}>Upload</button>
                        </label>
                        </div>
                    </div>
                    <div className="instructions-segment">
                        <h1>Instructions</h1>
                        <ul>
                            <li>Go to takeout.google.com</li>
                            <li>Deselect all options in “Select Data to Include” and select only the “Location History” option</li>
                            <li>Click “Create archive”, leaving all other options set to their default values</li>
                            <li>You will soon receive your location history data via email!</li>
                        </ul>
                    </div>
                </div>
                

            )
        }
}

export default DashboardSeller;