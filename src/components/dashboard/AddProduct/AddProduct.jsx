import style from './AddProduct.module.css'
import {useState} from 'react'
import logoSmall from '../../../assets/images/logoSmall.png';
import {RiCloseCircleFill} from 'react-icons/ri'

const AddProduct = ({setShowAddProduct}) => {

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        quantity: '',
        frequency: ''
    });

    function handleClose(e) {
        if (e.target.id === 'addProduct') {
            setShowAddProduct(false);
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
        id='addProduct'
        onClick={handleClose}
        className={style.addProductFormSection}
    >
        <div  
            className={style.addProductFormIconContainer}>
                <RiCloseCircleFill 
                onClick={() => setShowAddProduct(false)}
                className={style.addProductFormIcon}
                />
        </div>
        <form
            className={style.addProductForm}
        >
        <div className={style.addProductFormImage}>
          <img src={logoSmall} alt="logo" />
        </div>
        <div className={style.addProductFormInputs}>
            <input
                className={style.addProductInput}
                required
                type='text'
                name='name'
                placeholder='Product Name'
                value={formData.name}
                onChange={handleChange}
            />
            <input
                className={style.addProductInput}
                required
                type='text'
                name='price'
                placeholder='Product Price'
                value={formData.price}
                onChange={handleChange}
            />
            <input
                className={style.addProductInput}
                required
                type='text'
                name='quantity'
                placeholder='Product Quantity'
                value={formData.quantity}
                onChange={handleChange}
            />
            <input
                className={style.addProductInput}
                required
                type='text'
                name='frequency'
                placeholder='Product Frequency'
                value={formData.frequency}
                onChange={handleChange}
            />
            <input
                className={style.addProductSubmit}
                disabled={
                    !formData.name ||
                    !formData.price ||
                    !formData.quantity ||
                    !formData.frequency
                }
                type='submit'
                value='Add Product'
            />
        </div>
        </form>
    </section>
  )
};

export default AddProduct;
