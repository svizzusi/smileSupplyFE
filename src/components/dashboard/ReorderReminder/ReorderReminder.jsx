import style from './ReorderReminder.module.css'
import ReorderReminderHeader from './ReorderReminderHeader';
import ReorderReminderCard from './ReorderReminderCard';

const ReorderReminder = ({setShowEditProduct, productId, setProductId}) => {

  return (
    <section className={style.reorderReminderSection}>
        <h2 className={style.reorderReminderHeading}>Inventory Reorder Reminder</h2>
        <table className={style.reorderReminderTable}>
          <ReorderReminderHeader />
          <ReorderReminderCard setShowEditProduct={setShowEditProduct} productId={productId} setProductId={setProductId} />
        </table>
    </section>
  )
}

export default ReorderReminder;
