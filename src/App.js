import React, { Component } from 'react';
import axios from 'axios';
// import request from 'request';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Form from './form.js';
import Artist from './artistpage'
import UL from './List.js'

// artist:"Joe", date:"11,11, 2017", venue:"Danforth Music Hall"

class App extends Component {
  constructor(){
    super()
    this.state = 
    ({
      users:[],
      artists:[[{artist:'loading...'}]]
    })
  }
    componentWillMount(){
      this.getRotateThis()
      
    }

    getRotateThis = () => {
      axios.get('http://localhost:8080/scraperotatethis')
      .then((result) => {
        //Passes the result object.
          // console.log(result.data);
          let copy = Array.from(this.state.artists);
          copy.unshift(result.data);
        
          this.setState({
            artists: copy,
          });  
        console.log(this.state.artists)
        
      })
      .catch(err =>{
        console.log(err);
      });
    }

  
  render() {
    
    let artistList = this.state.artists[0].map((artists, index)=>{
    return (<Artist artists={artists} key={index} index={index}/>)
    })
    
    return (
      
      <div className="App">
      
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/search">Search</Link>
              <Link to="/artistList"> Upcoming Shows</Link>
              {/* <Form artists={this.state.artists} /> */}
            </nav>


            <Switch>
                
              <Route exact path='/artistList' render={({match})=>
              <UL artists = {artistList} />}
              />
              <Route exact path='/search' render={({match})=>
              <Form artists = {this.state.artists} />}
              />

            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
