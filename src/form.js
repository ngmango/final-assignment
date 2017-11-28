import React from 'react';
// import axios from 'axios';
import UL from './List.js';
import Artist from './artistpage.js'


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
    }
 
    render(){
        console.log(this.state.artistFound)

        let artistList = this.state.artistFound.map((artists, index)=>{
            return (<Artist artists={artists} key={index} index={index}/>)
            })
        
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">                
                        <input onChange={this.artistHandler} className="form-control" placeholder="Search For Artist" />

                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="search">Search</button>
                        </span>
                    </div>
                </form>

            <UL artists={artistList}/>
            </div>
        )
    }
}
export default Form;