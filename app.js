
const express = require('express');

const app = express();


app.use(express.static('public'));



// our first Route
app.get('/', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + "/views/index.html");
});
//route to about page
app.get('/about', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + "/views/about.html");
  });
// route to works page 
  app.get('/works', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + "/views/works.html");
  });

app.listen(3000, () => console.log('My first app listening on port 3000! '));
