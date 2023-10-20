import style from './ReorderReminder.module.css'
import ReorderReminderHeader from './ReorderReminderHeader';
import ReorderReminderCard from './ReorderReminderCard';

const ReorderReminder = ({setShowEditProduct, productId, setProductId, order, setOrder, toast, products, setProducts, fetchData, userId}) => {

  return (
    <section className={style.reorderReminderSection}>
        <h2 className={style.reorderReminderHeading}>Inventory Reorder Reminder</h2>
        <table className={style.reorderReminderTable}>
          <ReorderReminderHeader />
          <ReorderReminderCard setShowEditProduct={setShowEditProduct} productId={productId} setProductId={setProductId} order={order} setOrder={setOrder} toast={toast} products={products} setProducts={setProducts} fetchData={fetchData} userId={userId}/>
        </table>
    </section>
  )
}

export default ReorderReminder;
