import UserProfile from '../components/dashboard/UserProfile'
import {useEffect} from 'react'

const Dashboard = ({setSignedIn}) => {

  useEffect(() => {
    setSignedIn(true);
  }, [])

  return (
    <> 
      <UserProfile />
    </>
  )
};

export default Dashboard;
