const controllers = require('../controllers/controller')
const validators = require('../validators/validators')

// Import Swagger documentation
const documentation = require('./documentation/documentServicesApis')

const routes = [
    {
        method: "POST",
        url: "/addProductsToCart",
        handler: controllers.addProduct,
        schema: documentation.addProduct,
        preValidation: validators.validateAddProductRequest
    },
    {
        method: "POST",
        url: "/removeProductsToCart",
        handler: controllers.removeProduct,
        schema: documentation.removeProduct,
        preValidation: validators.validateRemoveProductRequest
    },
    {
        method: "GET",
        url: "/getProductsOfCart",
        handler: controllers.getProduct,
        schema: documentation.getProduct,
        preValidation: validators.validateGetCartRequest
    },
    {
        method: "POST",
        url: "/updateProductsOfCart",
        handler: controllers.updateProduct,
        // schema: documentation.updateProduct,
        // preValidation: validators.validateUpdateProductRequest
    },

]



module.exports = routes