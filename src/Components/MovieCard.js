import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieList.css';
import { Link } from 'react-router-dom';
function MovieCard({movieCard}) {
    
    
    return (

        <div>
            <Link to={`/description/${movieCard.id}`} style={{textDecoration:'none'}}>
            <Card className='carde'>
                <Card.Img variant="top" src={movieCard.posterUrl} alt='movie_card' className='cardimg'/>
                <Card.Body className="cardbody" >
                    <Card.Title >{movieCard.title}</Card.Title>
                    <Card.Text> {movieCard.description} </Card.Text>
                    <StarRatingComponent starCount={5} value={movieCard.rating}/>
                 
                </Card.Body>
            </Card>
            </Link>
        </div>    
    )
}
export default MovieCard