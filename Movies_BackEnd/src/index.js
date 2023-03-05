const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const app = express();
const { db } = require('./model/dbConnect');


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));


//Get All
app.get('/api/allMovie', (req, res) => {
    const limit = parseInt(req.query.limit) || 100;
    
    const sqlQuery = "SELECT * FROM movies LIMIT ?";

    db.query(sqlQuery, limit, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result);
        }
    });
});

//Get Detail Movie
app.get('/api/movieDetail', (req, res) => {
    //const userMovies = req.params.movies;
    const userMovies = req.body.movies_name;

    const sqlQuery = "SELECT * FROM movies WHERE movies_name = ?";
    db.query(sqlQuery, userMovies, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result);
        }
    });
});

//Add Movie
app.post('/api/addMovie', (req, res) => {
    const userMovies = req.body.movies_name;
    const userYear = req.body.year;
    const userGenre = req.body.genre;
    const userRating = req.body.rating;
    const userOneline = req.body.one_line;
    const userStars = req.body.stars;
    const userVotes = req.body.votes;
    const userRuntime = req.body.runtime;
    const userGross = req.body.gross;

    const sqlQuery = "INSERT INTO movies (movies_name, year, genre, rating, one_line, stars, votes, runtime, gross) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlQuery, [userMovies, userYear, userGenre, userRating, userOneline, userStars, userVotes, userRuntime, userGross], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result);
        }
    });
});

//Update Movie
app.put('/api/updateMovie', (req, res) => {
    const userMovies = req.body.movies_name;
    const userYear = req.body.year;
    const userGenre = req.body.genre;
    const userRating = req.body.rating;
    const userOneline = req.body.one_line;
    const userStars = req.body.stars;
    const userVotes = req.body.votes;
    const userRuntime = req.body.runtime;
    const userGross = req.body.gross;

    const sqlQuery = "UPDATE movies SET year = ?, rating = ?, votes = ?, runtime = ?, gross = ? WHERE movies_name = ?";
    db.query(sqlQuery, [userYear, userRating, userVotes, userRuntime, userGross, userMovies], (err, result) => {
        if (err) {
            console.log(err);
        } else {    
            res.send(result);
            console.log(result);
        }
    });
});

//delete Movie
app.delete('/api/deleteMovie', (req, res) => {
    const userMovies = req.body.movies_name;

    const sqlQuery ="DELETE FROM movies WHERE movies_name = ?";
    db.query(sqlQuery, user, (err, result) => {
        if (err) {
            console.log(err);
        } else {    
            res.send(result);
            console.log(result);
        }
    });
});


app.listen(3002, () => {
    console.log('Server Berhasil Berjalan');
});