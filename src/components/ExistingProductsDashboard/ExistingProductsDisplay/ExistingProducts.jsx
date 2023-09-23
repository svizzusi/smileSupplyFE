import style from './ExistingProducts.module.css'
import ExistingProductsCard from "./ExistingProductsCard";
import ExistingProductsHeader from './ExistingProductsHeader';

const ExistingProducts = ({setShowEditProduct}) => {

  return (
    <section className={style.existingProductsSection}>
      <h2 className={style.existingProductsHeading}>Existing Products</h2>
      <table className={style.existingProductsTable}>
        <ExistingProductsHeader />
        <ExistingProductsCard setShowEditProduct={setShowEditProduct} />
      </table>
    </section>
  )
};

export default ExistingProducts;
