import React from 'react';
import { data } from '../data'
import Navbar from './Navbar'
import MovieCard from'./MovieCard'
import { addMovies, setshowfavourite } from '../actions';


class App extends React.Component {
  componentDidMount(){
    const {store}=this.props
    store.subscribe(()=>{
      console.log('UPDATED')
      this.forceUpdate();
    });
    //making api call
    //dispatch function
    store.dispatch(addMovies(data))
    console.log('STATE',this.props.store.getState())
  }
  isMovieFavioureite =(movie)=>{
    const {movies}=this.props.store.getState();
    const index=movies.favourites.indexOf(movie)
    if(index !==-1){
      return true;
    }
    return false;
  }

onChangeTab = (val)=>{
  this.props.store.dispatch(setshowfavourite(val))
}
  render(){
    const{movies}=this.props.store.getState()
    const {list,favourites, showFavourites}= movies

    const displayMovies= showFavourites ? favourites: list

    return (
      <div className='App'>
        <Navbar/>
        <div className='main'>
          <div className='tabs'>
            <div className={`tab ${showFavourites ? '' : 'active-tabs' }`} onClick={()=>this.changeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : '' }`} onClick={()=>this.onChangeTab(true)}>Favourites</div>

          </div>
        <div className='list'>
          {displayMovies.map((movie,index)=>(
            <MovieCard movie={movie} key={`movies-${index}`}
            dispatch={this.props.store.dispatch}
            isFavourites={this.isMovieFavioureite(movie)}
            />
          ))}
          </div>
          {displayMovies.length ===0 ?<div className="no-movies">No Movies To Display!!</div>: null}


        </div>
      
      </div>
    );
  }
}

export default App;
