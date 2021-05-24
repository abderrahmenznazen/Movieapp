import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import Item from "./abonnement"
import Addfilm from "../page/dashboard "

class Input extends Component {
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

  thisHundelChange = (e) => {
    if(e.target.value == ""){
        this.setState({
      stri: "{null}"
    });
}else{
  
    this.setState({
      stri: e.target.value 
    });}
  };

  render() {
    return (
      <div className='inputt'>
        <div>{this.state.data.map((el)=>(
       <div>{el.movies.filter((x)=>x.title.includes(this.state.stri)).map((movie)=>(
                           <div className='serchcard'>     
                           <Addfilm
                            
                           titles={movie.title}
                         />
                       </div>)
                       )}
            </div>))} </div>
      </div>
    );
  }
}

export default Input;
