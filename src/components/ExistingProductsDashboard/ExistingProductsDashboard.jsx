import style from './ExistingProductsDashboard.module.css'
import ExistingProductsSearch from './ExistingProjectsSearch/ExistingProductsSearch'
import ExistingProducts from './ExistingProductsDisplay/ExistingProducts'
import EditProduct from '../dashboard/EditProduct/EditProduct'
import {useState} from 'react'

const ExistingProductsDashboard = ({productId, setProductId}) => {

  const [showEditProduct, setShowEditProduct] = useState(false)
  

  return (
    <>
      {showEditProduct && <EditProduct setShowEditProduct={setShowEditProduct} productId={productId} />}
      <section className={style.existingProductsDashboardSection}>
        <section className={style.existingProductsSearchSection}>
          <ExistingProductsSearch />
        </section>
        <section className={style.existingProducts}>
          <ExistingProducts 
            setShowEditProduct={setShowEditProduct}
            setProductId={setProductId}
          />
        </section>
      </section>
    </>
  )
};

export default ExistingProductsDashboard;
