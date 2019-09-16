import React from "react";

class WorkbenchTransactionCard extends React.Component {

    render = () => (
        <div className="micro-card">
            <h3 className="company">{this.props.companyName}</h3>
            <h1 className="amount">{this.props.amount}</h1>
            <h1 className="currency">MICRO</h1>
        </div>
    )
}

export default WorkbenchTransactionCard;