import { Component } from 'react'
import FormButton from '../../shared/components/FormButton/FormButton';
import FormContainer from '../../shared/components/FormContainer/FormContainer';
import FormInput from '../../shared/components/FormInput/FormInput';
import { ProductService } from '../../services/ProductService';
import { Product } from '../../models/Product';
import { UI_STATE_LOADING } from '../../shared/components/constants';


const ProductForm =()=> {
    const {status,value,error,inputState,handleInputChange,handleSaveProduct}= useProductForm();
        return (
        <FormContainer errorMessage={error ? 'Oopss' : ''}>
            <FormInput id='id' label='ID' value={product.id} onChange={handleInputChange}/>
            <FormInput id='productName' label='Product Name' value={product.productName} onChange={handleInputChange}/>
            <FormButton label='Save' onClick={handleSaveProduct} disabled={status===UI_STATE_LOADING}/>
            <div>Result:{value?value:''}</div>
        </FormContainer>
        )
    
}

export default ProductForm;