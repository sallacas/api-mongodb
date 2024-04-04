const mongose = require('mongoose')

require('dotenv').config()

const connectDB = async () => {
    try {
        const connect = await mongose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${connect.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB