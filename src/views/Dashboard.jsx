import UserProfile from '../components/dashboard/UserProfile'
import {useEffect} from 'react'

const Dashboard = ({setUser, productId, setProductId, order, setOrder, toast}) => {

  useEffect(() => {
    setUser(true);
  }, [])

  return (
    <> 
      <UserProfile productId={productId} setProductId={setProductId} order={order} setOrder={setOrder} toast={toast}/>
    </>
  )
};

export default Dashboard;
