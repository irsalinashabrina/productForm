import { useState } from 'react'
import { Product } from '../../models/Product';
import { useDeps } from '../../shared/DepContext'
import useAsync from '../../shared/UseAsync';

export const UseProductForm = () => {
    const productService = useDeps().productService;
    const [product, setProduct] = useState(Product())
    const {execute, status, value, error} = useAsync();
    const handleInputChange = (key, value) => {
        product[key] = value;
        setProduct({...product})
    }

    const handleSaveProduct = async () => {
       await execute(() => {
            const newProduct = Product(product.id, product.productName);
            return productService.addProduct(newProduct);
       })
    }
    return {status, value, error, product, handleInputChange, handleSaveProduct}
}
