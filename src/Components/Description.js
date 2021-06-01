import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './MovieList.css';
const Description = ({match,history,movieCard}) => {
console.log(movieCard)
    let movies = movieCard.filter(el => el.id === match.params.movieID);
  
    

    console.log(movies);
    return (
        <div className="text-center  movieapp">
            <Card className="cardDesc">
                <Card.Body>
                <Card.Title style={{color:'#d0a981'}}><h2>{movies.map(el => el.title)}</h2></Card.Title>
                <br/>
                <Card.Text style={{color:'#2d4b5d'}} ><h5>{movies.map(el => el.description)} </h5></Card.Text>
            <div >    
                <iframe width="560" height="315" src={movies.map(el=> el.trailerUrl)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
    
            </Card.Body>
           <Button variant="outline-dark"onClick={()=> history.goBack()}>back Home</Button>
            </Card>
           
        </div>    
    )
}

export default Description