import React from "react";

import pattern from "./assets/login_bg.jpg";

import logo from "./assets/logo.png";


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userType: 0,
            algorandId: null,
            mnemonic: ``

        }
        this.storeLoginDetail = this.storeLoginDetail.bind(this);
        this.selectUserType = this.selectUserType.bind(this);
    }

    render = () => {

        let dynamicFormElement;

        if (this.state.userType === 0) {
            dynamicFormElement = <div className="login-form">
            <input className="textbox" type="text" placeholder={`Algorand ID`} onChange={(e) => this.storeLoginDetail(0, e.target.value)}/>
            <p align="right">
                <button onClick={(e) => this.props.onLogin({
                    userType: this.state.userType,
                    algorandId: this.state.algorandId,
                    mnemonic: this.state.mnemonic
                })} className="normal-button">Login</button>
            </p>
            </div>;
        }

        else if (this.state.userType === 1)
            dynamicFormElement = <div className="login-form">
            <input className="textbox" type="text" placeholder={`Algorand ID`} onChange={(e) => this.storeLoginDetail(0, e.target.value)}/>
                <textarea placeholder="Enter Mnemonic" onChange={(e) => this.storeLoginDetail(1, e.target.value)}/>
            <p align="right">
                <button onClick={(e) => this.props.onLogin({
                    userType: this.state.userType,
                    algorandId: this.state.algorandId,
                    mnemonic: this.state.mnemonic
                })} className="normal-button">Login</button>
            </p>
            </div>;


        return (
            <div className="login-page">
                <div className="pattern-segment" style={
                    {
                        backgroundImage: `url('${pattern}')`
                    }
                }></div>
                <div className="login-segment">
                    <div className="logo" style={
                        {
                            backgroundImage: `url('${logo}')`
                        }
                    }/>
                    <h1 className="motto">An ethical marketplace for commute and transit data</h1>
                    <div className="menu-horizontal">
                        <div className={`option ${this.state.userType === 0 ? 'selected' : 'pristine'}`} onClick={(e) => this.selectUserType(e, 0)}>
                            Sell your data
                        </div>
                        <div className={`option ${this.state.userType === 1 ? 'selected' : 'pristine'}`} onClick={(e) => this.selectUserType(e, 1)}>
                            Buy data
                        </div>
                    </div>  
                    {dynamicFormElement}
                </div>
            </div>
        )
    }

    selectUserType = (e, type) => {
        e.preventDefault();
        this.setState({
            userType: type
        });
    }

    storeLoginDetail = (detail, value) => { 
        if (detail === 0)
            this.setState({
                algorandId: value
            });
        if (detail === 1)
            this.setState({
                mnemonic: value
            })
    }

    
}

export default Login;