// import models
import Product from "../models/productModel.js";

// asynchronous arrow function expression || parameter : request, respon
const getAllProduct = async(req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.json({message: error.message});
    }
}

const storeProduct = async(req, res) => {
    try {
        await Product.create(req.body);
        res.json({
            "message" : "Product has been stored"
        });
    } catch (error) {
        res.json({message: error.message});
    }
}

const getProductById = async(req, res) => {
    try {
        const product = await Product.findAll({
            where:{
                id: req.params.id
            }
        });
        res.json(product[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}

const updateProduct = async(req, res) => {
    try {
        await Product.update(req.body, {
            where:{
                id: req.params.id
            }
        });
        res.json({
            "message" : "Product has been updated"
        });
    } catch (error) {
        res.json({message: error.message});
    }
};

const deleteProduct = async(req, res) => {
    try {
        await Product.destroy({
            where:{
                id: req.params.id
            }
        });
        res.json({
            "message" : "Product has been deleted"
        });
    } catch (error) {
        res.json({message: error.message});
    }
}

// export function with object literal {}
export {getAllProduct, storeProduct, getProductById, updateProduct, deleteProduct};