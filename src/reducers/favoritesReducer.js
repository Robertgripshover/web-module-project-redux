const initialState = {
    favorites: [{title: 'Movie', id: 1}, {title: 'Abigail', id: 2}],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type){
        default: 
            return(state)
    }
}

export default favoritesReducer;