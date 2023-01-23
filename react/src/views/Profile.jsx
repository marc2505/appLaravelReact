import { SplitScreen } from '../components/SplitScreen'

const LeftHandComponent = () => {
    return (
        <>
        <div style={{ height:'100%',backgroundColor:'grey' }}>
            <h1>Sidebar</h1>
            <h3>Partie gauche</h3>
        </div>
        </>
    )
}

const RightHandComponent = () => {
    return (
        <>
        <h1>Content</h1>
        <h3>Partie droite</h3>
        </>
    )
}

export default function Profile() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent />
        <RightHandComponent />
    </SplitScreen>
  )
}
