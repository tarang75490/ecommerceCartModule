const Cart = require('../models/Cart')

const addProductToCart = async (fastify,addProductRequest)=>{
    let cart = await Cart.findOne({
       customerId:addProductRequest.customerId,
       variantId:addProductRequest.variantId 
    })
    if(!cart){
     cart = await new Cart(addProductRequest).save()
    }else{
        return {
            error:"This Product is Already added to your Cart"
        }
    }   
    return cart
}


const removeProductFromCart =async (fastify,removeProductRequest) => {

    const cart = await Cart.findOneAndDelete(removeProductRequest)
    if(!cart){
        return {
            error:"Product Not Found in the particular customer cart "
        }
    }
    return cart
}
const getProductofCart = async(fastify,getProductRequest) => {
    console.log(getProductRequest)
    const products = await Cart.find(getProductRequest)
    return products
}

const emptyProductsofCart = async(fastify,emptyCartRequest) => {
    console.log(emptyCartRequest)
    const deletedCart =await Cart.deleteMany(emptyCartRequest)

    return deletedCart

}


const updateQuantityToBuyCart = async(fastify,updateQuantityToBuyRequest) => {
    console.log(updateQuantityToBuyRequest)
    let product = await Cart.findOne({customerId: updateQuantityToBuyRequest.customerId,
                                        variantId: updateQuantityToBuyRequest.variantId })
    if(!product){
        return {
            error:"Product Not Found in the particular customer cart "
        }
    }
        product.quantityToBuy = updateQuantityToBuyRequest.quantityToBuy
    product = await new Cart(product).save()
    return product
}

const updateCartAfterPayment = async(fastify,updateCartAfterPaymentRequest) => {
    try{
        console.log(updateCartAfterPaymentRequest)
        const inventory = await fastify.axios.post("http://localhost:3010/getInventory",updateCartAfterPaymentRequest)
        console.log(inventory.data.data)
        inventory.data.data.forEach( async (item)=>{
            let variant = await Cart.updateMany({variantId:item.variantId},{quantity:item.inventory})  
            console.log(variant)  
        })

        return "Updated"
        
    }catch(e){
        console.log(e)
        return {
            error:e.response.data.errorCause
        }
    }
    
}





module.exports = {
    addProductToCart,
    removeProductFromCart,
    getProductofCart,
    emptyProductsofCart,
    updateQuantityToBuyCart,
    updateCartAfterPayment
}