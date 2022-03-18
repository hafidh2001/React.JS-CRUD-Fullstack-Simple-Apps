import express from "express"; // import library

// import controllers with object literal {}
import { 
    getAllProduct, 
    storeProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

router.get('/', getAllProduct);
router.post('/', storeProduct);
router.get('/:id', getProductById);
router.patch('/:id/update', updateProduct);
router.delete('/:id/delete', deleteProduct);

export default router;