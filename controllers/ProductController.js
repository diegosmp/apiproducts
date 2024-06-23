const Products = require("../models/Products");

module.exports = class ProductController {
    static async products (req, res) {
        try {
            const allProducts = await Products.findAll()
            if(!allProducts || allProducts.length === 0) {
                res.status(404).json({message: 'Nenhum produto cadastrado.'})
                return
            }
            res.status(200).json({allProducts})
        }catch(error) {
            res.status(500).json({message: 'Erro ao conectar com o servidor', error})
        }
    }

    static async create (req, res) {
        const {name, qtd, price} = req.body
        if(!name || !qtd || !price){
            res.status(422).json({message: 'Todos os campos tem que ser preenchidos.'})
            return
        }

        const productExists = await Products.findOne({where: {name}})
        if(productExists) {
            res.status(422).json({message: 'Produto já cadastrado.'})
            return
        }

        try {

            const newProduct = await Products.create({
                name,
                qtd,
                price
            })
            res.status(201).json({message: 'Produto cadastrado com sucesso.', newProduct})
        } catch (error) {
            
        }
    }
}