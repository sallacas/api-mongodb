const mongose = require('mongoose')

const supplierSchema = new mongose.Schema({
    fullname: ({ type: String, required: true }),
    address: ({ type: String, required: true }),
    nit: ({ type: Number, required: true }),
    email: ({ type: String, required: true }),
    phone: ({ type: Number, required: true }),
}, {
    versionKey: false
})
module.exports = mongose.model('supplier', supplierSchema)