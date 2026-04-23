const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let products = [
    { id: 1, name: 'Laptop', price: 15000000, stock: 10 },
    { id: 2, name: 'Mouse', price: 250000, stock: 50 },
    { id: 3, name: 'Keyboard', price: 450000, stock: 30 },
]
let nextId = 4

app.get('/products', (req, res) => {
    res.json({ success: true, data: products })
})

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id))
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' })
    res.json({ success: true, data: product })
})

app.post('/products', (req, res) => {
    const { name, price, stock } = req.body
    if (!name || price == null || stock == null) {
        return res.status(400).json({ success: false, message: 'name, price, and stock are required' })
    }
    const product = { id: nextId++, name, price, stock }
    products.push(product)
    res.status(201).json({ success: true, data: product })
})

app.put('/products/:id', (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id))
    if (index === -1) return res.status(404).json({ success: false, message: 'Product not found' })
    const { name, price, stock } = req.body
    products[index] = { ...products[index], ...(name && { name }), ...(price != null && { price }), ...(stock != null && { stock }) }
    res.json({ success: true, data: products[index] })
})

app.delete('/products/:id', (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id))
    if (index === -1) return res.status(404).json({ success: false, message: 'Product not found' })
    const deleted = products.splice(index, 1)[0]
    res.json({ success: true, data: deleted })
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})