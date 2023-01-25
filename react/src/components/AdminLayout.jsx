import React from 'react'
import { Navigate } from 'react-router-dom';
import { SplitScreen } from '../components/SplitScreen'
import { useStateContext } from '../contexts/ContextProvider';


export default function AdminLayout() {
  
  const {user, token, notification, setUser, setToken} = useStateContext();

  if (!token || user.role != 'admin') {
    return <Navigate to='/admin' />
  }

  const LeftHandComponent = () => {
      return (
          <>
          <div style={{ height:'100%',backgroundColor:'grey' }}>
              <h1>Sidebar</h1>
              <h3>Administrator</h3>
          </div>
          </>
      )
  }

  const RightHandComponent = () => {
      return (
          <>
          <h1>Content administrator</h1>
          <h3>Partie droite</h3>
          </>
      )
  }
  return (
    <SplitScreen leftWeight={1} rightWeight={4}>
        <LeftHandComponent />
        <RightHandComponent />
    </SplitScreen>
  )
}
