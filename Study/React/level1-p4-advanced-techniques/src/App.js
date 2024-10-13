import './App.css'
import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'

const App = () => {
  return (
    <div className='App'>
      <Button color='red'>Single</Button>

      <ButtonGroup>
        <Button>First</Button>
      </ButtonGroup>
    </div>
  )
}

export default App
