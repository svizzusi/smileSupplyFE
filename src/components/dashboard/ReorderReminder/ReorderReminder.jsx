import style from './ReorderReminder.module.css'
import ReorderReminderHeader from './ReorderReminderHeader';
import ReorderReminderCard from './ReorderReminderCard';

const ReorderReminder = () => {

  return (
    <section className={style.ReorderReminderSection}>
        <h2
          className={style.ReorderReminderHeading}
          >Inventory Reorder Reminder
        </h2>
        <table className={style.ReorderReminderTable}>
          <ReorderReminderHeader />
          <ReorderReminderCard />
          <ReorderReminderCard />
          <ReorderReminderCard />
        </table>
    </section>
  )
}

export default ReorderReminder;
