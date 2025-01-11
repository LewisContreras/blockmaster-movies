export const moviesToDisplay = (search, useSelector) => {
    if (search === "Todas") {
        return useSelector((state) => state.movies.allMovies.movies);
    } else if (search === "Ver despues") {
        return useSelector((state) => state.movies.watchLater);
    } else if (search === "Más valoradas") {
        return useSelector((state) => state.movies.mostValued);
    } else {
        return useSelector((state) => state.movies.selected);
    }
}