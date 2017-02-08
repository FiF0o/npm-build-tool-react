/**
 * Created by jonlazarini on 08/02/17.
 */
const express = require('express');

const app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(`${__dirname}/dist`));
app.set('views', `${__dirname}/src/views`);

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const data = { foo: 'bar' };
  res.render('index', { data: data.foo });
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
