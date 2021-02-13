//const express = require('express');

///const app = express();


///app.post('/', (req, res) => {
 ///   res.cookie('username', req.body.username);
 //   res.redirect('/');
///});

////app.post('/', (req, res) => {
 ///   res.clearCookie('username');
//    res.redirect('/');
// });

// app.use((err, req, res, next) => {
//     res.locals.error = err;
//     res.render('error');
// });


// app.listen(3000); () => {
//     console.log ('server established')

// };clearImmediate

P.getPokemonByName('eevee') // with Promise
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });

  P.getPokemonByName(34, function(response, error) { // with callback
      if(!error) {
        console.log(response);
      } else {
        console.log(error)
      }
    });

  P.resource(['/api/v2/pokemon/36', 'api/v2/berry/8', 'https://pokeapi.co/api/v2/ability/9/'])
    .then(function(response) {
      console.log(response); // resource function accepts singles or arrays of URLs/paths
    });