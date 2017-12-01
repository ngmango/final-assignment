import React, { Component } from 'react';
import axios from 'axios';
// import request from 'request';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Helmet} from "react-helmet";
import './App.css';
import Form from './form.js';
import Artist from './artistpage'
import UL from './List.js'
import Home from './Home.js'


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
      <Helmet>
        <meta charSet="utf-8" />
        <title>ToronShow</title>
      </Helmet>

        <Router>
          <div id="width">
            <div className='headerBox'>
              <div className='headerRight'>
                <h1 className= "listItems"> ToronShow </h1>
                <h2 className= "listItems"> (name W.I.P) </h2>
              </div>
            </div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/search"> Search</Link>
              <Link to="/artistList"> Upcoming Shows</Link>
            </nav>

            <Switch>
                

              <Route exact path='/' render={({match})=>
              <Home />} />
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
