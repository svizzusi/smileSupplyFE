import style from './AddProduct.module.css'
import {useState} from 'react'
import logoSmall from '../../../assets/images/logoSmall.png';
import {RiCloseCircleFill} from 'react-icons/ri'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = ({setShowAddProduct, productCreatedToast, productNotCreatedToast}) => {
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

const handleSubmit = async (e) => {
    e.preventDefault()

    const name = formData.name
    const price = formData.price
    const quantity = formData.quantity
    const frequency = formData.frequency

    try {
        const res = await axios.post('http://localhost:3000/products/createProduct', {name, price, quantity, frequency})
        console.log(res);
        console.log(res.data);

        if (res.request.status === 200) {
            productCreatedToast()
            setFormData((prevFormData) => ({
                ...prevFormData,
                name: '',
                price: '',
                quantity: '',
                frequency: ''
              }))
              setShowAddProduct(false)
        } else {
            productNotCreatedToast()
        }  

    } catch (err) {
        console.error(err)
    }

}

  return (
    <>
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
                onSubmit={handleSubmit}
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
                    placeholder='Product Frequency in Weeks'
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
    </>
  )
};

export default AddProduct;
