const service = require('../services/services')

const HttpError = require('../models/errors/httpError')


exports.addProduct= async (req, res) => {
    try {
        console.log(req.body)
        let response = await service.addProductToCart(req.fastify, req.body)
        
        if(response.error){
            res.status(200).send({
                status: 'failure',
                message:response.error
            })
        }
        return res.status(201).send({
            status: 'success',
            data: response,
            message:"Product Added to Cart Successfully"
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('failure', 2001, "Add Product to Cart Failed", e.message)
    }
}






exports.removeProduct= async (req, res) => {
    try {
        let response = await service.removeProductFromCart(req.fastify, req.body)
        if(response.error){
            res.status(200).send({
                status: 'failure',
                message:response.error
            })
        }
        return res.status(200).send({
            status: 'success',
            data: response,
            message:"Product Removed From cart Successfully"
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "Remove Product To cart  Failed", e.message)
    }
}



exports.getProduct= async (req, res) => {
    try {
        let response = await service.getProductofCart(req.fastify, req.query)
        if(response.error){
            res.code(400)
                throw new HttpError('faliure', 22005,response.error)
        }
        console.log(response)
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "Get Product from cart Failed", e.message)
    }
}


exports.emptyCart= async (req, res) => {
    try {
        let response = await service.emptyProductsofCart(req.fastify, req.query)
        if(response.error){
            return res.status(200).send({
                status: 'failure',
                message: response.error
            })
            res.code(400)
                throw new HttpError('faliure', 22005,response.error)
        }
        console.log(response)
        return res.status(200).send({
            status: 'success',
            data: response,
            message:"Cart Product Removed Successfully"
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "Emptying the  cart Failed", e.message)
    }
}


exports.updateQuantityToBuy= async (req, res) => {
    try {
        let response = await service.updateQuantityToBuyCart(req.fastify, req.body)
        if(response.error){
            return res.status(200).send({
                status: 'failure',
                data: response.error
            })
            res.code(400)
                throw new HttpError('faliure', 22005,response.error)
        }
        console.log(response)
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "Update quantity to buy  Failed", e.message)
    }
}
exports.updateCartAfterPayment= async (req, res) => {
    try {
        let response = await service.updateCartAfterPayment(req.fastify, req.body)
        if(response.error){
            res.code(400)
                throw new HttpError('faliure', 22005,response.error)
        }
        console.log(response)
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "Update Quantity of each cart after payment Failed", e.message)
    }
}