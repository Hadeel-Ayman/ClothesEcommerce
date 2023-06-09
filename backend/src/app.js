const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

app.get('/', (req, res) => {
    res.send('hello in order')
})

app.use(express.json())
app.use(cors())
require('../db/mogoose')

const AuthRouter = require('../routes/authRoutes')
app.use(AuthRouter)

const CategoryRouter = require('../routes/CategoryRoutes')
app.use(CategoryRouter)

const SubcategoryRouter = require('../routes/SubcategoryRoutes')
app.use(SubcategoryRouter)

const ProductRouter = require('../routes/ProductRoutes')
app.use(ProductRouter)


app.listen(port, () => console.log(`Localhost is ${port}`))