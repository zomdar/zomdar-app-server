const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('whats up dawg!');
});

app.get('/demo', (req, res) => {
	res.set('X-sup-dawg', 'heyyo');
	res.status(418);
	res.send('i rike turtles');
})

app.listen(port, () => console.log(`zomdar app listening on port ${port}!`));
