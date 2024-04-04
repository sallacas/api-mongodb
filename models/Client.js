const mongose = require('mongoose')

const clientSchema = new mongose.Schema({
    firstName: ({ type: String, required: true }),
    lastName: ({ type: String, required: true }),
    document: ({ type: Number, required: true }),
    email: ({ type: String, required: true }),
    phone: ({ type: Number, required: true }),
    address: ({ type: String, required: true }),
}, {
    versionKey: false
})
module.exports = mongose.model('client', clientSchema)