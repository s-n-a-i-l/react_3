import './Main.css';
import MovieList from '../components/MovieList';
import React from 'react';

class Main extends React.Component {
    state =
    {
      movies:[]
    }

        //для заполнения movies:[]
    componentDidMount() 
    {
        fetch('https://www.omdbapi.com/?apikey=5d82ad9c&s=bad')
        .then(response => response.json())
        .then(data=>this.setState({movies: data.Search}));
    }

    render() {
        return (
            <div className='main'>
                <div className='wrap'>
                    <MovieList movies ={this.state.movies}/>
                </div>
            </div>
        )
    }
}
export default Main;