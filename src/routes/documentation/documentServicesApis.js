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
                    "enum": ['failiure', 'success'],
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
