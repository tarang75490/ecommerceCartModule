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
        url: "/removeProductFromCart",
        handler: controllers.removeProduct,
        schema: documentation.removeProduct,
        preValidation: validators.validateRemoveProductRequest
    },
    {
        method: "DELETE",
        url: "/emptyProductsFromCart",
        handler: controllers.emptyCart,
        schema: documentation.emptyCart,
        preValidation: validators.validateEmptyCartRequest
    },
    {
        method: "GET",
        url: "/getProductsOfCart",
        handler: controllers.getProduct,
        schema: documentation.getProduct,
        preValidation: validators.validateGetCartRequest
    },
    {
        method: "PUT",
        url: "/updateQuantityToBuy",
        handler: controllers.updateQuantityToBuy,
        schema: documentation.updateQuantityToBuy,
        preValidation: validators.validateUpdateQunatityToBuyRequest
    },
    {
        method: "POST",
        url: "/updateCart",
        handler: controllers.updateCartAfterPayment,
        schema: documentation.updateCart,
        preValidation: validators.validateUpdateCartRequest
    },

]



module.exports = routes