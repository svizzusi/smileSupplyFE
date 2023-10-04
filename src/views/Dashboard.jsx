import UserProfile from '../components/dashboard/UserProfile'
import {useEffect} from 'react'

const Dashboard = ({setSignedIn, productId, setProductId}) => {

  useEffect(() => {
    setSignedIn(true);
  }, [])

  return (
    <> 
      <UserProfile productId={productId} setProductId={setProductId}/>
    </>
  )
};

export default Dashboard;
