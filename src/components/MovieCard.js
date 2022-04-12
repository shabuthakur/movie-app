import React from 'react'
import { addfavourite , removefromfavourite} from '../actions';

class MovieCard extends React.Component{
  handelFavouriteClick = ()=>{
    const{movie}=this.props;
    this.props.dispatch(addfavourite(movie))
  }
  handelUnFavouriteClick = ()=>{ 
    const{movie}=this.props;
    this.props.dispatch(removefromfavourite(movie))
  }
  render(){

    const {movie, isFavourites }=this.props
    return(
      <div className='movie-card'>
        <div className='left'>
          <img alt='movie-poster' src={movie.Poster}/>

        </div>
        <div className='right'>
          <div className='title'>{movie.Title}</div>
          <div className='plot'>{movie.Plot}</div>
          <div className='footer'>
            <div className='rating'>{movie.imdbRating}</div>
            {
              isFavourites
              ?<button className='unfavourite-btn' onClick={this.handelUnFavouriteClick}>Unfavourite</button>
              :<button className='favourite-btn' onClick={this.handelFavouriteClick}>Favourite</button>
            }
          </div>

        </div>
      </div>

    )
  }
}
export default MovieCard