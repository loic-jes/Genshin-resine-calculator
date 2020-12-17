import React, { Component } from 'react';

class BlocMiseAJourCard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        console.log("Card state : " + this.props.data.title)
        return (
            <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header"><b>{this.props.data.title}</b></div>
                <div className="card-body">
                    <img className="card-img-top" src={this.props.data.src} alt={this.props.data.alt} />
                    <p className="card-text">{this.props.data.text1}</p>
                    <p className="card-text">{this.props.data.text2}</p>
                    <p className="card-text">{this.props.data.text3}</p>
                    <p className="card-text">{this.props.data.text4}</p>
                    <p className="card-text">{this.props.data.text5}</p>
                    <p className="card-text">{this.props.data.text6}</p>
                    <p className="card-text">{this.props.data.text7}</p>
                    <p className="card-text">{this.props.data.text8}</p>
                    <p className="card-text">{this.props.data.text9}</p>
                    <p className="card-text">{this.props.data.text10}</p>
                </div>
                <div className="card-footer text-muted">
                    {this.props.data.date}
                </div>
            </div>
        );
    }
}

export { BlocMiseAJourCard };