/**
 * Handles GET requests to "/greet" endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
*/

const express = require('express');

const app = express();
const port = 8000;

function greetHandler(req, res) {
    // Your implementation here
    const name = req.query.name || "Guest";
    
    res.send(`Hello, ${name}!`);
   

}

app.get("/greet", greetHandler);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/greet?name=""`);
});


// run this code and open in browser and add any thing in the localhost address to see the magic
// for examaple current address is http://localhost:8000/greet?name=
// write it like http://localhost:8000/greet?name=aman
// this wiil show aman in the screen

