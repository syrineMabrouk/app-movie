import React, { useState } from 'react';
import App from './App';
import Description from './Components/Description';
import { v4 as uuidv4 } from 'uuid';
import { Route, Switch } from 'react-router';

const Router = () => {

    const datamovie = 
    [{
        id: uuidv4(),
        title: "I Care A Lot",
        description: "I Care a Lot is a 2020 American black comedy thriller film written and directed by J Blakeson. The film stars Rosamund Pike,The film follows a con woman who makes a living as a court-appointed guardian, seizing the assets of vulnerable elderly people, only for her to get mixed up with a dangerous gangster..",
        posterUrl: "https://www.rovinj-tourism.com/uploads/imgcache/large/events/21642/1612433292_2855.jpg",
        trailerUrl: "https://www.youtube.com/embed/fu6LX4Ieasg",
        rating: 5
    }, {
        id: uuidv4(),
        title: "Social Dilemma",
        description: "is an American docudrama film released in 2020, directed by Jeff Orlowski and written by Orlowski, Davis Coombe, and Vickie Curtis. It goes into depth on how social media's design is meant to nurture an addiction, manipulate people and governments, and spread conspiracy theories.",
        posterUrl: "https://www.thesocialdilemma.com/wp-content/uploads/2020/09/discussion-guide-cover.png",
        trailerUrl: "https://www.youtube.com/embed/uaaC57tcci0",

        rating: 2,

    },
    {
        id: uuidv4(),
        title: "Joker",
        description: "Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver. The film, based on DC Comics characters, stars Joaquin Phoenix as the Joker and provides a possible origin story for the character. ",
        posterUrl: "https://www.kaakook.fr/img/affiche/big/affiche-2557.jpg",
        trailerUrl:  "https://www.youtube.com/embed/zAGVQLHvwOY",

        rating: 1,
    },

    {
        id: uuidv4(),
        title: "47 Meters Down",
        description: "  47 Meters Down ou Instinct de survie au Québec est un thriller horrifique britannico coécrit et réalisé par Johannes Roberts, sorti en 2017..",
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/e/e5/47_Meters_Down_%282017%29_Theatrical_Release_Poster.png",
        
        trailerUrl:  "https://www.youtube.com/embed/ddYSGGJAKOk",
        rating: 2
    },
    {
        id: uuidv4(),
        title: "race 3",
        description: "Race 3 is a 2018 Indian Hindi-language action thriller film directed by Remo D'Souza and produced under Tips Industries and Salman Khan Films. The film features Salman Khan, Anil Kapoor, Bobby Deol, Jacqueline Fernandez, Daisy Shah, Saqib Saleem and Freddy Daruwala. It is the third installment of Race film series which started with Race in 2008 and Race 2 in 2013, but has a sparsely related plot to the previous films and is considered a reboot of the 2008 original.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMzQ4ZTc5ZTItYWRhNi00YTJjLWI4NGMtNjA0ODQ1ZDQxNzkyXkEyXkFqcGdeQXVyNjc4NjAxMzM@._V1_.jpg",
        trailerUrl: "https://www.youtube.com/embed/xBht9TG7ySw",
        rating: 5,
    },


    {
        id: uuidv4(),
        title: "Five Feet Apart",
        description: "Five Feet Apart is a 2019 American romantic drama film directed by Justin Baldoni (in his directorial debut)[5] and written by Mikki Daughtry and Tobias Iaconis. The film was inspired by Claire Wineland, who suffered from cystic fibrosis.[6] Haley Lu Richardson and Cole Sprouse play two young patients with cystic fibrosis, who try to have a relationship despite always being forced to stay a certain distance (6 ft) away from each other. It was released in the United States on March 15, 2019 by CBS Films via Lionsgate.",
        posterUrl: "https://i.ytimg.com/vi/cdZEItD8WX0/maxresdefault.jpg",
        trailerUrl: "https://www.youtube.com/embed/XtgCqMZofqM",
        rating: 3
    }
    ];

    const [movieList, setMovieList] = useState(datamovie);
    return (
        <Switch>
            <Route exact path={'/'}> <App movieList={movieList} setMovieList={setMovieList} /> </Route>
            <Route exact path={'/description/:movieID'} render={(props) => <Description {...props} movieCard={movieList} ></Description>} />
        </Switch>
    )
}

export default Router