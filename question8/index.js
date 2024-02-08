const express = require("express");
const app = express();

function validatePositiveInteger(req, res, next) {
    const number = parseInt(req.query.number);

    Number.isInteger(number) && number > 0
        ? next()
        : next(new Error("Invalid or non-positive integer provided"));
    
}

app.get("/positive", validatePositiveInteger, (req, res) => {
    res.send("Success! Positive integer provided.");
});

app.use((err, req, res, next) => {
    if (err.message === "Invalid or non-positive integer provided") {
        res.status(400).send("Invalid or non-positive integer provided");
    } else {
        next(err);
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// npm i express or npm install express run in your terminal
//  write these url on your webpage to see the magic 

// http://localhost:3000/positive?number=-33
// http://localhost:3000/positive?number=3432