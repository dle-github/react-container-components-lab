import React, { Component } from 'react';
import ReactDOM from "react-dom";

import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'gdjLe4DmGOAmGmjPDm6YFLtQckAGGYNP';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super();
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleSubmit = (e) => {
        fetch(URL+ `&query=${this.state.searchTerm}`)
          .then((response) => response.json())
          .then((reviewData) => this.setState({reviews: reviewData.results}));
    }

    changeSearchTerm = (e) => {
        const inputValue = e.target.value
        this.setState(
          () => {
              return {searchTerm: inputValue}
          }
        )
      }

    render(){
        return(
            <div>
                <form className='searchable-movie-reviews' onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            <input id="username" name="username" type="text" onChange={this.changeSearchTerm} value={this.state.searchTerm}/>
                            <button type="submit">Search</button>
                        </label>
                    </div>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>

        )
    }
}