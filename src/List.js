import React, {Component } from 'react';
// import Artist from './artistpage';
// import App from './App';

class UL extends Component {
    render(){
        
        return(
        <div>
            <div className="list-group">
                {this.props.artists}
            </div>
        </div>
        )
    }
}

export default UL;