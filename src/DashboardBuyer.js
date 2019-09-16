import React from "react";
import logo from "./assets/logo_circle.png";

import WorkbenchTransactionCard from "./WorkbenchTransactionCard";
import WorkbenchGlowCard from "./WorkbenchGlowCard";
import DatasetPreview from "./DatasetPreview";

import axios from "axios";

class DashboardBuyer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            transactionData: {
                algorandId: props.algorandId,
                mnemonic: props.mnemonic,
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
        this.onSubscribe = this.onSubscribe.bind(this);
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
                        <h1 onClick={(e) => this.switchTab(0)}>Datasets</h1>
                        <h1 onClick={(e) => this.switchTab(1)}>Account</h1>
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
                <h2 className="instruction">Explore aggregated datasets available for access through our API</h2>
                <div className="card-flex">
                    {
                        this.state.campaigns.map((campaign, i) => (
                            <WorkbenchGlowCard
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
                <h1 className="title">Account Details</h1>
                <div className="card-flex">
                    <div className="micro-card width-70">
                        <h3 className="company">Algorand ID</h3> <h1 className="crypto">{this.state.transactionData.algorandId}</h1> <h1 className="crypto">{this.state.transactionData.mnemonic}</h1>
                    </div>
                    <div className="micro-card">
                        <h3 className="company">Balance</h3> <h1>{this.state.transactionData.balance}</h1><h1 className="currency">MICRO</h1>
                    </div>
                </div>
                
                <hr/>
                <h1 className="title">Transactions</h1>
                <div className="card-flex low-padding">
                    {
                        this.state.transactionData.transactions.map((transaction, i) => (
                            <div className="micro-card" key={i}>
                                <h3 className="company">Transit Data API Key</h3>
                                <h1 className="currency">{transaction.key}</h1>
                            </div>
                        ))
                    }
                    
                </div>
            </>
        )

        renderWorkbench3 = () => (
            <>
                <DatasetPreview createSubscription={(e) => this.onSubscribe(e)}/>
            </>
        )

        onSubscribe = (e) => {
            e.preventDefault();
            let self = this;
            axios.post(`http://fargonaut.herokuapp.com/transact`, {
                "from": this.state.transactionData.algorandId,
                "mnem": this.state.transactionData.mnemonic,
                "algos": 12500000
            })
                .then(function (response) {
                // handle success
                self.switchTab(0);
                console.log(response);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
              .finally(function () {
                // always executed
              });
        }


}

export default DashboardBuyer;