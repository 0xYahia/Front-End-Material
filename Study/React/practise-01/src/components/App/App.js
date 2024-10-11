import style from './App.module.css'
import Card from '../Card/Card'

const App = () => {

  const boys = [
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
  const girls = [
    {
      name: 'Amira',
      age: 27,
      address: 'Cairo',
      phone: '0102702567'
    },
    {
      name: 'Soha',
      age: 30,
      address: 'Cairo',
      phone: '0102702567'
    },
    {
      name: 'Asmaa',
      age: 33,
      address: 'Cairo',
      phone: '0102702567'
    },
  ]



  return (
    <>
      <div className={style.mainContainer}>
        <h1>Boys</h1>
        <Card userList={boys} type="boys" />
        <h1>Girls</h1>
        <Card userList={girls} type='girls' />
      </div>
    </>
  )
}

export default App