import React from "react";
import DeckGLVisualizer from "./DeckGLVisualizer";

class DatasetPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [`nyc`, `austin`, `sfo`]
        };
    }

    render = () => {

        return (
            <div className="visualizer-schemer">
                <div className="nav">
                    <h1>Commute History Data</h1>
                    <h2>4000 contributors</h2>
                    <button className="normal-button" onClick={(e) => this.props.createSubscription(e)}>Subscribe for 12500000 ALGO</button>
                </div>
                <div className="dataset-preview">
                    <DeckGLVisualizer/>
                </div>
            </div>
            
        )
    }

    createTransaction = (e) => {
        e.preventDefault();
       // axios.post(`http://www.`)
    }
}

export default DatasetPreview;