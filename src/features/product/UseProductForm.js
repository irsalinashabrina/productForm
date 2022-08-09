import { Component } from 'react'
import FormButton from '../../shared/components/FormButton/FormButton';
import FormContainer from '../../shared/components/FormContainer/FormContainer';
import FormInput from '../../shared/components/FormInput/FormInput';
import { ProductService } from '../../services/ProductService';
import { useDeps } from '../../shared/components/DepContext';
import { Product } from '../../models/Product';
import useAsync from '../../shared/components/UseAsync';


const useProductForm =()=> {
    const productService = useDeps().productService;
    const [product,setProduct]=useState(Product());
    const {execute,status,value,error} = useAsync();

    const handleInputChange = (key, value) => {
        setProduct({
            ...product,
            [key]:value
        })
    }

    const handleSaveProduct = async () => {
        this.setState({
            isLoading: true,
            error : null,
        })
        try {
            const newProduct = Product
            const result = await this.productService.addProduct({
                id : this.state.data.id,
                productName : this.state.data.productName
            });
            if (result) alert(result)
                this.setState({
                    isLoading : false,
                    error : null,
                    data : {id : '', productName : ''}
                })
        } catch (e) {
            this.setState({
                isLoading : false,
                error : e,
                data : {id : '', productName : ''}
            })
        }
    }

    render() {
        return (
        <FormContainer errorMessage={this.state.error ? 'Oopss' : ''}>
            <FormInput id='id' label='ID' value={this.state.data.id} onChange={this.handleInputChange}/>
            <FormInput id='productName' label='Product Name' value={this.state.data.productName} onChange={this.handleInputChange}/>
            <FormButton label='Save' onClick={this.handleSaveProduct} disabled={this.state.isLoading}/>
        </FormContainer>
        )
    }
}

export default ProductForm;