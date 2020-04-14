const ProductModel = require('../models/products')

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
const getAll = async (request, h)=>{
            const products = await ProductModel.find({})

            return {data: products.map(transformer)};
        }


//lista um produto
const find = async (req, h)=>{
            const product = await ProductModel.findById(req.params.id)

            return h.response({data: transformer(product)}).code(200)
        }


//salva um produto
const save = async (req, h)=>{
     //console.log(req.payload)
     const {name , price} = req.payload

     const product = new ProductModel

     product.name = name

     product.price = price

     await product.save();     

     return h.response({data: transformer(product)}).code(201)
     // ou return h.response({data: product}).code(201)
 }

//remove um produto
 const remove = async(req,h)=>{
     await ProductModel.findOneAndDelete({_id: req.params.id})
     return h.response().code(204)
 }

 //alterando produto
 const update = async (req, h)=>{

            const {id , name , price} = req.payload

            const product = await ProductModel.findByIdAndUpdate(id,{name ,price})

            return h.response({data: transformer(product)}).code(200)
            // console.log(id, {name, price})
            // return 'update'
        }


module.exports ={
    getAll,
    save,
    remove,
    find,
    update
}