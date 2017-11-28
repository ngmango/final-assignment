import React from 'react';
import axios from 'axios';


class Form extends React.Component {
    constructor(){
        super()
        this.state = ({
            artist:'',
            artistFound: [],
            
        })
    
    this.artistHandler = this.artistHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)    
    this.search = this.search.bind(this)
    }

   // let artistProp = Array.from(this.props.artists.toString().toLowerCase())
        //  console.log("hey" + artistProp)
        // let artistFinder = Array.from(this.state.artistFound)
        // for(let i=0; i<artistProp.length; i++){
        //     if(artistProp[i].includes(this.state.artist.toLowerCase())){
        //         artistFinder.push(artistProp[i])
        //         this.setState({
        //             artistFound:artistFinder,
        //         })
        //         console.log(this.state.artistFound)
        //     }
        // }


    artistHandler(e){
        e.preventDefault()
        this.setState({
            artist:e.target.value.toLowerCase()
        })
        console.log(this.state.artist)
    }

    search(artistKey, myArray){
        let newArray = [];
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].artist.toLowerCase().includes(artistKey)) {
                newArray.push(myArray[i]);
                console.log(myArray)
                this.setState({
                    artistFound:newArray,
                })
                console.log(this.state.artistFound)
                
            }
        
        }
    }

    
    handleSubmit(e){
        e.preventDefault();
        this.search(this.state.artist, this.props.artists[0])
        console.log(this.state.artist)
        console.log(this.state.artistFound)
    }
 
    render(){
        return(

            <form onSubmit={this.handleSubmit}>
            <div className="input-group">                
                <input onChange={this.artistHandler} className="form-control" placeholder="Search For Artist" />

                <span className="input-group-btn">
                    <button className="btn btn-primary" type="search">Search</button>
                </span>
            </div>
            </form>
        )
    }
}
export default Form;