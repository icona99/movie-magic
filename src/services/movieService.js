const movies = [{
    _id: '1',
    title: 'Jungle Cruise',
    genre: 'Adventure',
    director: 'Spielberg',
    date: '2019',
    imageUrl: '/img/jungle-cruise.jpeg',
    rating: '5',
    description: 'bla bla bla'
}];
exports.getAll = () => {
    return movies.slice()
}
exports.getOne = (movieId) => {
    const movie = movies.find(movie => movie._id == movieId);
    return movie;
}

exports.create = (movieData) => {
    movieData._id = movies[movies.length - 1]._id + 1
    movies.push(movieData);
};