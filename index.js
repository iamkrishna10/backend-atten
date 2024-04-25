const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 3
});

app.use(limiter);

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'deepamisking' && password === 'deepamisking') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
