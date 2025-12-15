import express from "express";

const app = express();

const port = process.env.PORT || 3000;
app.get('/products', (req, res) => {
    res.json({
        id: 1,
        name: 'Laptop gaming',
        price: 1000,
        description: 'Laptop gaming de ultima generacion',
        category: 'Laptop',
        stock: 10,
        imageURL: 'https://i.rtings.com/assets/pages/6dRuEBex/best-gaming-laptops-20242028-medium.jpg?format=auto'
    })
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})  