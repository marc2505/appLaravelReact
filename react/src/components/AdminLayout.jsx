import React from 'react'
import { SplitScreen } from '../components/SplitScreen'


export default function AdminLayout() {
  
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
