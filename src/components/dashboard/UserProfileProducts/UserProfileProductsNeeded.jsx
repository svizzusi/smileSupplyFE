import style from './UserProfileProducts.module.css'
import UserProfileProductsHeader from './UserProfileProductsHeader';
import UserProfileProductsCard from './UserProfileProductsCard';

const UserProfileProductsNeeded = () => {

  return (
    <section>
        <h2>Products Needed</h2>
        <table>
          <UserProfileProductsHeader />
          <UserProfileProductsCard />
        </table>
    </section>
  )
};

export default UserProfileProductsNeeded;
