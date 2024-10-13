import './App.css'
import List from './components/List'
import ShapeOne from './components/ShapeOne'
import ShapeTwo from './components/ShapeTwo'

const App = () => {
  // const userData = [
  //   { id: 1, name: 'yahia', email: 'yahia@gmail.coom', age: 27 },
  //   { id: 2, name: 'ahmed', email: 'ahmed@gmail.coom', age: 29 },
  //   { id: 3, name: 'wafaa', email: 'Sayed@gmail.coom', age: 30 },
  //   { id: 4, name: 'safaa', email: 'Mohamed@gmail.coom', age: 31 },
  // ]

  const userData = [
    {
      componentName: ShapeOne,
      data: { id: 1, name: 'yahia', email: 'yahia@gmail.coom', age: 27 },
    },
    {
      componentName: ShapeTwo,
      data: { id: 4, name: 'safaa', email: 'Mohamed@gmail.coom', age: 31 },
    },
  ]

  const child = userData.map((el) => {
    const ComponentName = el.componentName
    return <ComponentName item={el.data} key={el.data.id} />
  })

  return (
    <div className='App'>
      {/* <List items={userData}>
         <ShapeOne />
       </List>
       <List items={userData}>
         <ShapeTwo />
      </List>
      <ShapeOne item={userData[0]} /> */}
      {child}
    </div>
  )
}

export default App
