import { FormButton } from '../../shared/components/FormButton';
import { FormContainer } from '../../shared/components/FormContainer';
import FormInput from '../../shared/components/FormInput';
import { UseProductForm } from './UseProductForm';
import { UI_STATE_LOADING } from '../../shared/constants';

const ProductForm = () => {
    const {status, value, error, product, handleInputChange, handleSaveProduct} = UseProductForm();
        return (
            <FormContainer errorMessage={error ? 'Oopss' : ''}>
                <FormInput id='id' label='ID' value={product.id} onChange={handleInputChange}/>
                <FormInput id='productName' label='Product Name' value={product.productName} onChange={handleInputChange}/>
                <FormButton label='Save' onClick={handleSaveProduct} disabled={status === UI_STATE_LOADING}/>
                <div>Result : {value ? value : ''}</div>
            </FormContainer>
        )
}

export default ProductForm;


   