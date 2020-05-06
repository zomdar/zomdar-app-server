const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('whats up dawg');
});

app.listen(port, () => console.log(`zomdar app listening on port ${port}!`));
