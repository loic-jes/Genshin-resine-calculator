import React, { Component } from 'react';

class BlocMiseAJourCard extends Component {
    
    render() {
        return (
            <div className="card bg-light mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header">{this.props.date}</div>
            <div className="card-body">
              <img className="card-img-top" src={this.props.src} alt={this.props.alt}/>
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.text1}</p>
              <p className="card-text">{this.props.text2}</p>
              <p className="card-text">{this.props.text3}</p>
              <p className="card-text">{this.props.text4}</p>
              <p className="card-text">{this.props.text5}</p>
              <p className="card-text">{this.props.text6}</p>
              <p className="card-text">{this.props.text7}</p>
              <p className="card-text">{this.props.text8}</p>
              <p className="card-text">{this.props.text9}</p>
              <p className="card-text">{this.props.text10}</p>
            </div>
          </div>
        );
    }
}

export {BlocMiseAJourCard};