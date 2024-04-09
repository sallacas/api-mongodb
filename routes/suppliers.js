const express = require('express')

const router = express.Router()
const supplierController = require('../controllers/supplierController')

router.post('/', supplierController.createSupplier)
router.get('/', supplierController.getSupplier)
router.get('/:id', supplierController.getSupplierByID)
router.put('/:id', supplierController.updateSupplier)
router.delete('/:id', supplierController.deleteSupplier)
//router.delete('/:id', clientController.deleteSuppliertWithOne)

module.exports = router