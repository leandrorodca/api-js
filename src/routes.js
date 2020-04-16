const productHandler = require('./handlers/product')


module.exports = [
    {
        method: 'GET',
        path: '/api/v1/products',
        handler: productHandler.getAll
    },
    {
        method: 'GET',
        path: '/api/v1/products/{id}',
        handler: productHandler.find
    },
    {
        method: 'POST',
        path: '/api/v1/products',
        handler: productHandler.save,
         options:{
            cors: true
        }
    },
    {
        method: 'PUT',
        path: '/api/v1/products',
        handler: productHandler.update,
         options:{
            cors: true
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/products/{id}',
        handler: productHandler.remove,
        options:{
            cors: true
        }
    }
]