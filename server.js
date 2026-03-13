// Server configuration
const port = 3001;

// Dependencies
const exp = require('express');

// Application setup
const app = exp();

// Middleware
app.use(exp.urlencoded({ extended: false }));

let storedUserName = '';

// Routes
app.get('/', (req, res) => {
	res.send(`
		<h1>WELCOME</h1>
		<h3>Please Enter Your Name To Receive a Greeting.</h3>
		<form method="POST" action="/submit-name">
			<label for="name">Name:</label>
			<input id="name" name="name" type="text" required />
			<button type="submit">Submit</button>
		</form>
	`);
});

app.post('/submit-name', (req, res) => {
	storedUserName = req.body.name || '';
	res.redirect('/hello');
});

app.get('/hello', (req, res) => {
	if (!storedUserName) {
		return res.send('<h1>No name submitted yet.</h1><a href="/">Go back</a>');
	}

	res.send(`<h1>Hello, ${storedUserName}!</h1><a href="/">Go Back</a>`);
});

// Start the server
app.listen(port, () => {
	console.log(`Server Started At Port: ${port}.\nEnter Ctrl+C to stop the server`);
});