import React from 'react';

/** Components */
import Login from './Login';
import DashboardSeller from './DashboardSeller';



class App extends React.Component {

  /*
    @todo: userType change to null after u're done with testing
  */

  constructor(props) {
    super(props);
    this.state = {
      userType: null,
      algorandId: null,
      mnemonic: null
    }
    this.registerUserBasicDetails = this.registerUserBasicDetails.bind(this);
  }



  render = () => {
    let activeComponent;
    if (this.state.userType === null)
      activeComponent = <Login onLogin={(payload) => this.registerUserBasicDetails(payload)}/>;
    else if (this.state.userType === 0) {
      activeComponent = <DashboardSeller/>;
    }
    return (
      <div className="App">
        {activeComponent}
      </div>
    )
    
  }

  registerUserBasicDetails = (payload) => {
    console.log("Login call received", payload);
    this.setState({
      userType: payload.userType,
      algorandId: payload.algorandId,
      mnemonic: payload.mnemonic
    });
  }
}

export default App;
