/**
 * Created by jonlazarini on 08/02/17.
 */
const express = require('express');

const app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(`${__dirname}/dist`));

app.set('views', `${__dirname}/src/views`);
// TODO Replace with other templating engine... ejs is ugly T_T
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.send('HELLO WORLD!');
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
