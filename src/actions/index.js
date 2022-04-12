//action type variables
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITE='ADD_FAVOURITE'
export const REMOVE_FROM_FAVOURITES='REMOVE_FROM_FAVOURITES'
export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES'

//action creators
export function addMovies(movies){
  return{
    
      type:ADD_MOVIES,
      movies
    
  }
}
export function addfavourite(movie){ ///only one object 
  return{
    
      type:ADD_FAVOURITE,
      movie
    
  }
}
export function removefromfavourite(movie){ ///only one object 
  return{
    
      type:REMOVE_FROM_FAVOURITES,
      movie
    
  }
}

export function setshowfavourite(val){ ///only one object 
  return{
    
      type:SET_SHOW_FAVOURITES,
      val
    
  }
}
