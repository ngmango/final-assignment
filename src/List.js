import React, {Component } from 'react';
// import Artist from './artistpage';
// import App from './App';

class UL extends Component {
    render(){
        
        return(
        <div>
            <ul className="list-group">
                {this.props.artists}
            </ul>
        </div>
        )
    }
}

export default UL;