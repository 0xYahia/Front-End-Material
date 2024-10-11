import  './App.css'
import Card from './Card'

const App = () => {

  const users = [
    {
      name: 'Yahia',
      age: 27,
      address: 'Cairo',
      phone: '0102702567'
    },
    {
      name: 'Ahmed',
      age: 30,
      address: 'Cairo',
      phone: '0102702567'
    },
    {
      name: 'Sayed',
      age: 33,
      address: 'Cairo',
      phone: '0102702567'
    },
  ]



  return (
    <>
      <div className="mainContainer">
        <Card userList={users} />
      </div>
    </>
  )
}

export default App