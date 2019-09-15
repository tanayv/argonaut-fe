import React from 'react';

/** Components */
import Login from './Login';
import DashboardSeller from './DashboardSeller';
import DashboardBuyer from './DashboardBuyer';

import axios from 'axios';

class App extends React.Component {

  /*
    @todo: userType change to null after u're done with testing
  */

  constructor(props) {
    super(props);
    this.state = {
      userType: null,
      algorandId: null,
      mnemonic: null,
      balance: 0,
      transactions: []
    }
    this.registerUserBasicDetails = this.registerUserBasicDetails.bind(this);
  }



  render = () => {
    let activeComponent;
    if (this.state.userType === null)
      activeComponent = <Login onLogin={(payload) => this.registerUserBasicDetails(payload)}/>;
    else if (this.state.userType === 0) {
      activeComponent = <DashboardSeller 
        algorandId={this.state.algorandId}
        transactions={this.state.transactions}
        balance={this.state.balance}
        onLogout={(e) => this.logout(e)}/>;
    }
    else if (this.state.userType === 1) {
      activeComponent = <DashboardBuyer 
        algorandId={this.state.algorandId}
        mnemonic={this.state.mnemonic}
        transactions={this.state.transactions}
        balance={this.state.balance}
        onLogout={(e) => this.logout(e)}/>;;
    }
    return (
      <div className="App">
        {activeComponent}
      </div>
    )
    
  }

  registerUserBasicDetails = (payload) => {
    
    let self = this;
    let userLiteral;
    if (payload.userType === 0)
      userLiteral = `seller`;
    else
      userLiteral = `buyer`;
    let url = `http://fargonaut.herokuapp.com/transactions?account=${payload.algorandId}&type=${userLiteral}`;
    console.log("Making query to: ", url);
    axios.get(url)
      .then(function (response) {
        // handle success
        console.log("Transactions for account", response.data);
        self.setState({
          balance: response.data.amount,
          transactions: response.data.transactions,
          userType: payload.userType,
          algorandId: payload.algorandId,
          mnemonic: payload.mnemonic
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  logout = (e) => {
    e.preventDefault();
    this.setState({
      userType: null,
      algorandId: null,
      mnemonic: null
    });
  }
}

export default App;
