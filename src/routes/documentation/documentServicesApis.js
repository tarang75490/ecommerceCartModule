exports.addProduct = {
    description: 'Add Product to cart',
    tags: ["Cart"],
    summary: 'add product',
    body:{
        "type": "object",
        "properties": {
            "customerId": {
                "type": "string"
            },
            "variantId": {
                "type": "string"
            },
            "productId": {
                "type": "string"
            },
            "productName": {
                "type": "string"
            },
            "price": {
                "type": "number"
            },
            "quantity": {
                "type": "number"
            },
            "mainCategory": {
                "type": "string"
            },
            "subCategory": {
                "type": "string"
            },
            "size": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "customerId": {
                "type": "string"
            },
            "quantityToBuy":{
                "type":"number"
            }
    
        },
        "required": [
            "customerId",
            "variantId",
            "productId",
            "productName",
            "price",
            "quantity",
            "mainCategory",
            "subCategory",
            "quantityToBuy"
        ]
    },
    
    response: {
        200: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                },
            "required": [
                "status",
                "message"
            ]
        },
        201: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
        "properties": {
            "customerId": {
                "type": "string"
            },
            "variantId": {
                "type": "string"
            },
            "productId": {
                "type": "string"
            },
            "productName": {
                "type": "string"
            },
            "price": {
                "type": "number"
            },
            "quantity": {
                "type": "number"
            },
            "mainCategory": {
                "type": "string"
            },
            "subCategory": {
                "type": "string"
            },
            "size": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "customerId": {
                "type": "string"
            },
            "quantityToBuy":{
                "type":"number"
            }
    
        },
        "required": [
            "customerId",
            "variantId",
            "productId",
            "productName",
            "price",
            "quantity",
            "mainCategory",
            "subCategory",
            "quantityToBuy"
        ]

                }
            },
            "required": [
                "status",
                "data"
            ]
        }, 400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}

exports.removeProduct = {
    description: 'Remove Product to cart',
    tags: ["Cart"],
    summary: 'Remove Product',
    body:{
        "type": "object",
        "properties": {
            "customerId": {
                "type": "string"
            },
            "variantId": {
                "type": "string"
            }
    
        },
        "required": [
            "customerId",
            "variantId",
        ]
    },
    
    response: {
        200: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "customerId": {
                            "type": "string"
                        },
                        "variantId": {
                            "type": "string"
                        },
                        "productId": {
                            "type": "string"
                        },
                        "productName": {
                            "type": "string"
                        },
                        "price": {
                            "type": "number"
                        },
                        "quantity": {
                            "type": "number"
                        },
                        "mainCategory": {
                            "type": "string"
                        },
                        "subCategory": {
                            "type": "string"
                        },
                        "size": {
                            "type": "string"
                        },
                        "customerId": {
                            "type": "string"
                        },
                
                    },
                    "required": [
                        "customerId",
                        "variantId",
                        "productId",
                        "productName",
                        "price",
                        "quantity",
                        "mainCategory",
                        "subCategory"
                    ]

                }
            },
            "required": [
                "status",
    
            ]
        }, 400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}

exports.getProduct = {
    description: 'Get Product to cart',
    tags: ["Cart"],
    summary: 'Get Product',
    query:{
        "type": "object",
        "properties": {
            "customerId": {
                "type": "string"
            },
    
        },
        "required": [
            "customerId",
        ]
    },
    
    response: {
        200: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failiure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type":"array",
                    "items":{
                        "type":"object",
                    "properties":{

                                "customerId": {
                                    "type": "string"
                                },
                                "variantId": {
                                    "type": "string"
                                },
                                "productId": {
                                    "type": "string"
                                },
                                "productName": {
                                    "type": "string"
                                },
                                "price": {
                                    "type": "number"
                                },
                                "quantity": {
                                    "type": "number"
                                },
                                "mainCategory": {
                                    "type": "string"
                                },
                                "subCategory": {
                                    "type": "string"
                                },
                                "size": {
                                    "type": "string"
                                },
                                "customerId": {
                                    "type": "string"
                                },
                                "quantityToBuy":{
                                    "type":"number"
                                }

                            },

                            "required": [
                                "customerId",
                                "variantId",
                                "productId",
                                "productName",
                                "price",
                                "quantity",
                                "mainCategory",
                                "subCategory",
                                "quantityToBuy"
                            ]
                        }
                }
            },
            "required": [
                "status",
                "data"
            ]
        }, 400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}

exports.emptyCart = {
    description: 'Empty cart from products',
    tags: ["Cart"],
    summary: 'Empty Cart',
    query:{
        "type": "object",
        "properties": {
            "customerId": {
                "type": "string"
            },
    
        },
        "required": [
            "customerId",
        ]
    },
    
    response: {
        200: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type":"array",
                    "items":{
                        "type":"object"
                    }
                }
            },
            "required": [
                "status",
            ]
        }, 400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}

exports.updateQuantityToBuy = {
    description: 'Add Product to cart',
    tags: ["Cart"],
    summary: 'add product',
    body:{
        "type": "object",
        "properties": {
            "customerId": {
                "type": "string"
            },
            "variantId": {
                "type": "string"
            },
             "quantityToBuy":{
                "type":"number"
            }
    
        },
        "required": [
            "customerId",
            "variantId",
            "quantityToBuy"
        ]
    },
    
    response: {
        201: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failiure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "string"

                }
            },
            "required": [
                "status",
                "data"
            ]
        }, 400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}

exports.updateCart = {
    description: 'Get Cart with inventory',
    tags: ["Cart"],
    summary: 'Get Inventory',
    body: {
        "type": "object",
        "properties": {
            "variantIds": {
                "type": "array",
                "items":{
                    "type":"string"
                }
            }
            
        },
        "required": [
            "variantIds",
        ]
    },
    response: {
        200: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['faliure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    
                            // "type":"array",
                            // "items":{
                            //     "type":"object",
                            //     "properties":{
                            //         "variantId":{
                            //             "type":"string"
                            //         },
                            //         "inventory":{
                            //             "type":"number"
                            //         },
                            //         "reservedInventory":{
                            //             "type":"number"
                            //         },
                            //     },
                            //     "required":[
                            //         "variantId",
                            //         "inventory",
                            //         "reservedInventory"
                            // //     ]
                            // }
                            "type":"string"
                   
                    
                },
                },
            
            "required": [
                    "status",
                    "data"
                    ]

                
        }, 400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
    }