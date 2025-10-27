import './App.css'
import Button from './Components/Button/Button'

function App() {
  return (
    <>
    <Button>Test1</Button>
    <Button type="danger" shape='pills'>Delete</Button>
    <Button type="secondary">Warn</Button>
    <Button shape="square">Click Here to Continue</Button>
    </>
  )
}

export default App
