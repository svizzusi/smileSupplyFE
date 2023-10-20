import style from './ExistingProductsDashboard.module.css'
import ExistingProductsSearch from './ExistingProjectsSearch/ExistingProductsSearch'
import ExistingProducts from './ExistingProductsDisplay/ExistingProducts'
import EditProduct from '../dashboard/EditProduct/EditProduct'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const ExistingProductsDashboard = ({productId, setProductId, order, setOrder, toast}) => {

  const [showEditProduct, setShowEditProduct] = useState(false)
  const navigate = useNavigate()


   // Fetch UserName from the server on component mount
   useEffect(() => {
    const userName = window.sessionStorage.getItem('userName')
    if (!userName) {
      navigate('/')
    } else {
    console.log("UserName from sessionStorage:", userName);
    };
  }, [])

  return (
    <>
      {showEditProduct && <EditProduct setShowEditProduct={setShowEditProduct} productId={productId} toast={toast}/>}
      <section className={style.existingProductsDashboardSection}>
        <section className={style.existingProductsSearchSection}>
          <ExistingProductsSearch />
        </section>
        <section className={style.existingProducts}>
          <ExistingProducts 
            setShowEditProduct={setShowEditProduct}
            setProductId={setProductId}
            order={order} 
            setOrder={setOrder}
            toast={toast}
          />
        </section>
      </section>
    </>
  )
};

export default ExistingProductsDashboard;
