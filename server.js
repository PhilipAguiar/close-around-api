
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


// Listen
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
