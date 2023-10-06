import UserProfile from '../components/dashboard/UserProfile'
import {useEffect} from 'react'

const Dashboard = ({setSignedIn, productId, setProductId, order, setOrder}) => {

  useEffect(() => {
    setSignedIn(true);
  }, [])

  return (
    <> 
      <UserProfile productId={productId} setProductId={setProductId} order={order} setOrder={setOrder}/>
    </>
  )
};

export default Dashboard;
