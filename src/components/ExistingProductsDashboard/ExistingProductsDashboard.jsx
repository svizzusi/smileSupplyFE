import style from './ExistingProductsDashboard.module.css'
import ExistingProductsSearch from './ExistingProjectsSearch/ExistingProductsSearch'
import ExistingProducts from './ExistingProductsDisplay/ExistingProducts'

const ExistingProductsDashboard = () => {
  return (
    <section className={style.existingProductsDashboardSection}>
      <section className={style.sexistingProductsSearchSection}>
        <ExistingProductsSearch />
      </section>
      <section className={style.existingProducts}>
        <ExistingProducts />
      </section>
    </section>
  )
};

export default ExistingProductsDashboard;
