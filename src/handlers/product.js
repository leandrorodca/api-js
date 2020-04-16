const ProductRepository = require('../repositories/products')

const transformer = product => ({
         type: 'products',
         id: product.id,
         attributes: {
             name: product.name,
             price: product.price,
         },
         links: {
             self: `/api/v1/products/${product.id}`
         }
     })

//lista todos os produtos
const getAll = async ()=>{
            const products = await ProductRepository.getAll()

            return {data: products.map(transformer)};
        }


//lista um produto
const find = async (req)=>{

            const product = await ProductRepository.find(req.params.id)

            return {data: transformer(product)}
        }


//salva um produto
const save = async (req, h)=>{
     
    const product = await  ProductRepository.save(req.payload)
     
    return h.response(transformer(product)).code(201)
     
 }

//remove um produto
 const remove = async(req,h)=>{
     await ProductRepository.remove(req.params.id)
     return h.response().code(204)
 }

 //alterando produto
 const update = async (req, h)=>{

            const product = await ProductRepository.update(req.payload)

            return h.response(transformer(product)).code(200)

        }


module.exports ={
    getAll,
    save,
    remove,
    find,
    update
}