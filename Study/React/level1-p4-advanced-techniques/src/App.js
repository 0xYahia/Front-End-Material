import './App.css'
import Button from './components/Button'
import ButtonGroup from './components/ButtonGroup'

const App = () => {
  const callBackFun = (content) => {
    console.log(content)
  }
  return (
    <div className='App'>
      <Button callBackFun={callBackFun} color='red'>
        Single
      </Button>

      <ButtonGroup>
        <Button callBackFun={callBackFun}>First</Button>
        <Button callBackFun={callBackFun}>Second</Button>
      </ButtonGroup>
    </div>
  )
}

export default App
