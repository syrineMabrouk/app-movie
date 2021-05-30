import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieList.css';
function MovieCard({movieCard}) {
    
    
    return (

        <div>
            <Card className='carde'>
                <Card.Img variant="top" src={movieCard.posterUrl} alt='movie_card' className='cardimg'/>
                <Card.Body className="cardbody" >
                    <Card.Title >{movieCard.title}</Card.Title>
                    <Card.Text> {movieCard.description} </Card.Text>
                    <StarRatingComponent starCount={5} value={movieCard.rating}/>
                 
                </Card.Body>
            </Card>
            
        </div>    
    )
}
export default MovieCard