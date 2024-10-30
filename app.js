const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// In-memory storage for blog posts
let posts = [];

// Routes
app.get('/', (req, res) => {
  res.render('index', { posts });
});

app.get('/new', (req, res) => {
  res.render('new');
});

app.post('/new', (req, res) => {
  const { title, content } = req.body;
  const createdAt = new Date();
  posts.push({ id: Date.now(), title, content, createdAt });
  res.redirect('/');
});

app.get('/edit/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  res.render('edit', { post });
});

app.post('/edit/:id', (req, res) => {
  const { title, content } = req.body;
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  posts[index] = { ...posts[index], title, content };
  res.redirect('/');
});

app.get('/delete/:id', (req, res) => {
  posts = posts.filter(p => p.id !== parseInt(req.params.id));
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});