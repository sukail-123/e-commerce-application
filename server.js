const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const products = [
    { id: 1, name: "Mobile", price: 15000 },
    { id: 2, name: "Laptop", price: 50000 }
];

app.get("/products", (req, res) => {
    res.json(products);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
app.get("/products", (req, res) => {
    res.json([
        { id: 1, name: "Mobile", price: 15000 },
        { id: 2, name: "Laptop", price: 50000 }
    ]);
});
