const express = require('express')
const cors = require('cors')
const app = express()

const connectDB = require('../config/db')

connectDB()

app.use(cors())
app.use(express.json())
app.disable('x-powered-by')
app.use('/api/client', require('../routes/clients'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))