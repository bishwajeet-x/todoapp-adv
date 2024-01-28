const express = require('express');

const app = express();

//for parsing req to get body from req
//tells node what type of app it is. here, json based
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => res.send('Hello'));

// localhost:3000/user?name=vish
app.get('/user', (req, res) => res.send(req.query.name));

// localhost:3000/1
app.get('/:id', (req, res) => res.send(req.params.id));

app.post('/', (req, res) => res.send(req.body));

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

