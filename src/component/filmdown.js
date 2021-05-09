import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import Item from "./abonnement"
import Genre from "./genres"

class Browser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      stri: 0,
    };
  }

  getData() {
    axios.get("film.json").then((response) => {
      var a = response.data;
      this.setState({ data: a });
    });
  }
  componentDidMount() {
    this.getData();
  }

  thisHundelChange = () => {
    if(document.getElementById("browsers").value == ""){
        this.setState({
      stri: null
    });
}else{
  
    this.setState({
      stri: document.getElementById("browsers").value  
    });}
  };

  render() {
    return (
      <div className='browsers'>
        <button type="button" onClick={this.thisHundelChange}>genres</button>
        <select name="browsers" id="browsers" >

                    <option value="Adventure">Adventure</option>
                    <option value="Comedy">Comedy</option>
                   
        </select>
        <div>{this.state.data.map((el)=>(
       <div>{el.movies.filter((x)=>x.genres.includes(this.state.stri)).map((movie)=>(
                           <div className='serchcard'>
                           <Item 
                           cimg={movie.posterUrl}  
                           ctitle={movie.title}
                           cgenres={movie.genres} 
                           cplay={movie.play}/>
                       </div>)
                       )}
            </div>))} </div>
      </div>
    );
  }
}

export default Browser;