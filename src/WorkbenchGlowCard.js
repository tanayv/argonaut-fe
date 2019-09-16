import React from "react";

const WorkbenchGlowCard = (props) => (
    <div className="card">
        <div className="icon">
            <i className={props.icon}></i>
        </div> 
        <h1>{props.title}</h1>
        <table cellSpacing="0">
            <tbody>
                <tr>
                    <th>Type</th>
                    <td>{props.type}</td>
                </tr>
                <tr>
                    <th>Price</th>
                    <td>{props.reward} MICRO</td>
                </tr>
            </tbody>
        </table>
        <button onClick={(e) => props.onBegin(e)}>Explore</button>
    </div>
)

export default WorkbenchGlowCard