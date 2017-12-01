import React, {Component } from 'react';
// import Artist from './artistpage';
// import App from './App';

class UL extends Component {
    render(){
        
        return(
        <div>
            <h3 id="h31"> Artist </h3>
            <h3 id="h32"> Date </h3>
            <h3 id="h33"> Venue </h3>
            <div className="tableau">
                {this.props.artists}
            </div>
        </div>
        )
    }
}

export default UL;