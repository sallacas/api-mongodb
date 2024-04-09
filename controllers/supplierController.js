const Supplier = require('../models/Supplier')

exports.createSupplier = async (req, res) => {
    try {
        const { fullname, address, nit, email, phone } = req.body
        const newSupplier = new Supplier({ fullname, address, nit, email, phone })
        await newSupplier.save()
        res.json({ status: 'success', message: 'Supplier created', data: newSupplier })
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message, data: null })
    }
}
exports.getSupplier = async (req, res) => {
    try {
        const suppliers = await Supplier.find()
        res.json({ status: 'success', message: 'Suppliers retrieved', data: suppliers })
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message, data: null })
    }
}

exports.getSupplierByID = async (req, res) => {
    try {
        const client = await Supplier.findById(req.params.id)
        if (!client) {
            return res.status(404).json({ status: 'error', message: 'Client not found', data: null })
        }
        res.json({ status: 'success', data: client })
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message, data: null })
    }
}

exports.updateSupplier = async (req, res) => {
    try {
        const { fullname, address, nit, email, phone } = req.body
        const supplier = await Supplier.findById(req.params.id)
        if (!supplier) {
            return res.status(404).json({ status: 'error', message: 'Supplier not found', data: null })
        }
        const updatedSupplier = await Supplier.findByIdAndUpdate(req.params.id, { fullname, address, nit, email, phone }, { new: true })
        res.json({ status: 'success', message: 'Supplier updated', data: updatedSupplier })
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message, data: null })
    }
}

exports.deleteSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id)
        if (!supplier) {
            return res.status(404).json({ status: 'error', message: 'Supplier not found', data: null })
        }
        await Supplier.findByIdAndDelete(req.params.id)
        res.json({ status: 'success', message: 'Supplier deleted' , data: null })
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message, data: null })
    }
}

exports.deleteSuppliertWithOne = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id)
        if (!supplier) {
            return res.status(404).json({ status: 'error', message: 'Supplier not found', data: null })
        }
        await Supplier.deleteOne({ _id: req.params.id })
        res.json({ status: 'success', message: 'Supplier deleted', data: null })
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message , data: null })
    }
}