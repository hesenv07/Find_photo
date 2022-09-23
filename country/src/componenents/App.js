import React, { Component } from 'react';
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";
import "./app.css";
import ImageList from "./image/ImageList";


class App extends Component
{
  state=
  {
    images:[]
  };

  onSearchImage = async(search) =>
  {
    // console.log('App: '+search);
   const result = await axios.get('https://api.unsplash.com/search/photos',{
      params:{
        query :search
      },
      headers:
      {
        Authorization : 'Client-ID 7eZLBNPZEtl0nialAJQgzbKTMIuqrdtZZK9jGkie2hM'
      }

    })
    // console.log(result.data.results);
    this.setState({
      images:result.data.results
    });
  }

  render()
  {
    return (
      <div className="app-container">
      <SearchBar onSearchImage={this.onSearchImage}/>
      <ImageList images={this.state.images}/>
      </div>
    )

  }
  
};


export default App;
