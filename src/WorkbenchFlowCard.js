import React from "react";

const WorkbenchFlowCard = (props) => (
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
                    <th>Reward</th>
                    <td>{props.reward} ALGO</td>
                </tr>
            </tbody>
        </table>
        <button onClick={(e) => props.onBegin(e)}>Begin</button>
    </div>
)

export default WorkbenchFlowCard