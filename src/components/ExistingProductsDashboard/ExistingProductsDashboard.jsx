import style from './ExistingProductsDashboard.module.css'
import ExistingProductsSearch from './ExistingProjectsSearch/ExistingProductsSearch'
import ExistingProducts from './ExistingProductsDisplay/ExistingProducts'
import EditProduct from '../dashboard/EditProduct/EditProduct'
import {useState} from 'react'

const ExistingProductsDashboard = () => {

  const [showEditProduct, setShowEditProduct] = useState(false)

  return (
    <section className={style.existingProductsDashboardSection}>
      {showEditProduct && <EditProduct setShowEditProduct={setShowEditProduct} />}
      <section className={style.existingProductsSearchSection}>
        <ExistingProductsSearch />
      </section>
      <section className={style.existingProducts}>
        <ExistingProducts 
          setShowEditProduct={setShowEditProduct}
        />
      </section>
    </section>
  )
};

export default ExistingProductsDashboard;
