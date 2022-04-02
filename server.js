
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.static('public'))
app.use(express.json())
app.use(cors());

// Routes
const ticketmasterRoute = require('./routes/ticketmaster');
app.use('/ticketmaster', ticketmasterRoute);
const eventRoute = require('./routes/events');
app.use('/events', eventRoute);
// const loginRoute = require('./routes/login');
// app.use('/login', loginRoute);
// Listen
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
