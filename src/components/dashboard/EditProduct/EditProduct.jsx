import style from './EditProduct.module.css'
import {useState} from 'react'
import logoSmall from '../../../assets/images/logoSmall.png';
import {RiCloseCircleFill} from 'react-icons/ri'

const EditProduct = ({setShowEditProduct}) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        quantity: '',
        frequency: ''
    });

    function handleClose(e) {
        if (e.target.id === 'editProduct') {
            setShowEditProduct(false);
        }
    }
function handleChange(e) {
    const {name, value} = e.target;
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [e.target.name]: e.target.value,
        }
    })
}

  return (
    <section
        id='editProduct'
        onClick={handleClose}
        className={style.editProductFormSection}
    >
        <div  
            className={style.editProductFormIconContainer}>
                <RiCloseCircleFill 
                onClick={() => setShowEditProduct(false)}
                className={style.editProductFormIcon}
                />
        </div>
        <form
            className={style.editProductForm}
        >
            <div className={style.editProductFormImage}>
            <img src={logoSmall} alt="logo" />
            </div>
            <div className={style.editProductFormInputs}>
                <input
                    className={style.editProductInput}
                    required
                    type='text'
                    name='name'
                    placeholder='Product Name'
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    className={style.editProductInput}
                    required
                    type='text'
                    name='price'
                    placeholder='Product Price'
                    value={formData.price}
                    onChange={handleChange}
                />
                <input
                    className={style.editProductInput}
                    required
                    type='text'
                    name='quantity'
                    placeholder='Product Quantity'
                    value={formData.quantity}
                    onChange={handleChange}
                />
                <input
                    className={style.editProductInput}
                    required
                    type='text'
                    name='frequency'
                    placeholder='Product Frequency'
                    value={formData.frequency}
                    onChange={handleChange}
                />
                <input
                    className={style.editProductSubmit}
                    disabled={
                        !formData.name ||
                        !formData.price ||
                        !formData.quantity ||
                        !formData.frequency
                    }
                    type='submit'
                    value='Edit Product'
                />
            </div>
        </form>
    </section>
  )
};

export default EditProduct;
