import style from './ExistingProducts.module.css'
import ExistingProductsCard from "./ExistingProductsCard";
import ExistingProductsHeader from './ExistingProductsHeader';

const ExistingProducts = () => {

  return (
    <section className={style.existingProductsSection}>
      <h2 className={style.existingProductsHeading}>Existing Products</h2>
      <table className={style.existingProductsTable}>
        <ExistingProductsHeader />
        <ExistingProductsCard />
        <ExistingProductsCard />
        <ExistingProductsCard />
        <ExistingProductsCard />
      </table>
    </section>
  )
};

export default ExistingProducts;
