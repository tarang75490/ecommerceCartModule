const keys = require('./index')


exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Cart Service APIs',
      description: 'Cart related all CRUD APIs',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    // host: 'localhost:'+keys.server.port,
    host: 'colossalcart.herokuapp.com',
    schemes: ['https'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}