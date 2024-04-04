const Client = require('../models/Client')

exports.createClient = async (req, res) => {
    try {
        const { firstName, lastName, document, email, phone, address } = req.body
        const newClient = new Client({ firstName, lastName, document, email, phone, address })
        await newClient.save()
        res.json({ status: 'success', message: 'Client created', data: newClient })
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message, data: null })
    }

}
exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find()
        res.json({ status: 'success', message: 'Clients retrieved', data: clients })
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message, data: null })
    }
}

exports.getClientById = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id)
        if (!client) {
            return res.status(404).json({ status: 'error', message: 'Client not found', data: null })
        }
        res.json({ status: 'success', data: client })
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message, data: null })
    }
}

exports.updateClient = async (req, res) => {
    try {
        const { firstName, lastName, document, email, phone, address } = req.body
        const client = await Client.findById(req.params.id)
        if (!client) {
            return res.status(404).json({ status: 'error', message: 'Client not found', data: null })
        }
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, { firstName, lastName, document, email, phone, address }, { new: true })
        res.json({ status: 'success', message: 'Client updated', data: updatedClient })
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message, data: null })
    }
}

exports.deleteClient = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id)
        if (!client) {
            return res.status(404).json({ status: 'error', message: 'Client not found', data: null })
        }
        await Client.findByIdAndDelete(req.params.id)
        res.json({ status: 'success', message: 'Client deleted' , data: null })
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message, data: null })
    }
}

exports.deleteClientWithOne = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id)
        if (!client) {
            return res.status(404).json({ status: 'error', message: 'Client not found', data: null })
        }
        await Client.deleteOne({ _id: req.params.id })
        res.json({ status: 'success', message: 'Client deleted', data: null })
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message , data: null })
    }
}