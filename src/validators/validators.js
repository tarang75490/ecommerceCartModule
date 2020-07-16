const HttpError = require('../models/errors/httpError')

exports.validateAddProductRequest = function (req, res, done) {
    if (!req.body.customerId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'CustomerId is missing'))
    }else if (!req.body.variantId){
        res.code(400)
        done(new HttpError('faliure', 20001, 'Variant Id is missing'))
    }else if (!req.body.productId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'ProductId is missing'))
    }else if(!req.body.price){
        res.code(400)
        done(new HttpError('faliure', 20001, 'Price is missing'))
    }else if (!(req.body.quantity)){
        res.code(400)
        done(new HttpError('faliure', 20001, "Quantity is missing"))
    }else if(!req.body.mainCategory){
        res.code(400)
        done(new HttpError('faliure', 20001, 'MainCategory is missing'))
    }else if(!req.body.subCategory){
        res.code(400)
        done(new HttpError('faliure', 20001, 'Sub Category is missing'))
    }else if (!req.body.productName) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Product Name is missing'))
    }
    else{
        done()
    }
}
exports.validateRemoveProductRequest = function (req, res, done) {
    if (!req.body.customerId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'customerId is missing'))
    }else if (!req.body.variantId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Variant Id is missing'))
    }else{
        done()
    }
}


exports.validateGetCartRequest = function (req, res, done) {
    if (!req.query.customerId ) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'customerId  is missing'))
    }else{
        done()
    }
}


exports.validateUpdateProductRequest = function (req, res, done) {
 
}