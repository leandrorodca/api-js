const ProductModel = require('../models/products')


//lista todos os produtos
const getAll = async () => await ProductModel.find({})

//lista um produto
const find = async (id) => await ProductModel.findById(id)

            
//salva um produto
const save = async (payload) => {
    
     const {name , price} = payload

     const product = new ProductModel()

     product.name = name

     product.price = price

     await product.save()     

     return product
 }

//remove um produto
 const remove = async id =>  await ProductModel.findOneAndDelete({_id: id})
     
 //alterando produto
 const update = async (payload)=>{

            const {id , name , price} = payload

            const product = await ProductModel.findByIdAndUpdate(id,{name ,price})

            return product
        }


module.exports ={
    getAll,
    save,
    remove,
    find,
    update
}