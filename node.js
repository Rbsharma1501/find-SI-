const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/interest", function(req, res) {
    const principal = parseFloat(req.query.principal);
    const rate = parseFloat(req.query.rate);
    const time = parseFloat(req.query.time);
    
    const interest = (principal * time * rate) / 100;
    const total = principal + interest;

    res.send({
        total: total,
        interest: interest
    });
});

app.listen(3000);
