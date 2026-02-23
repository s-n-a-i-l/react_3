import './Main.css';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import Search from '../components/Search.js';
import React from 'react';

class Main extends React.Component {
    state =
    {
      movies:[],
      count: 0
    }

        //для заполнения movies:[]
    componentDidMount() 
    {
        fetch('https://www.omdbapi.com/?apikey=5d82ad9c&s=bad')
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, count: data.totalResults}));
    }

    searchMovie = (str, type = 'all', page = 1) =>
    {
         fetch(`https://omdbapi.com/?apikey=94dbc433&s=${str}${type !== 'all' ? `&type=${type}` : ''}${`&page=${page}`}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, count: data.totalResults}));
    }

    render() {
        return (
            <div className='main'>
                <div className='wrap'>
                   {/* <MovieList movies={this.state.movies} /> */}
                    <Search searchMovie={this.searchMovie}  totalCount={this.state.count}/>
                    {
                        this.state.movies != null && this.state.movies.length === 0 ? <Preloader /> : <MovieList movies={this.state.movies} />
                    }
                </div>
            </div>
        )
    }
}
export default Main;