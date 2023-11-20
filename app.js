const express = require('express');

//exress app
const app = express()

//listen for requests
app.listen(3000);
//respond to requests 
app.get('/', function (req, res) {
   // res.send('<p>Home Page</p>');
   res.sendFile('./views/index.html', {root: __dirname});
  });

  app.get('/about', function (req, res) {
   // res.send('<p>About Page</p>');
   res.sendFile('./views/about.html', {root: __dirname});
});

//redirects
app.get('/about-us', function (req, res) {
    res.redirect('/about');
 });

//404 page.  Must go at the very bottom because it is a catch all
app.use((req, res) => {
    res.status(404).res.sendFile('./views/404.html', {root: __dirname});
})
