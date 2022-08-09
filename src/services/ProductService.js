export const ProductService=()=>{
    const addProduct = (newProduct)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if (newProduct.id!=='') {
                    resolve('Add product Success')
                } else {
                    reject(new Error('oops...'))
                }
            })
        })
    }
    return {
        addProduct
    }
}