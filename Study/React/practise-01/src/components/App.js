const App = () => {
  const pStyles = {color: 'red', marginTop: '100px'}
  const myName = 'Ahmed';
  const names = ['Mohamed', 'Yahia', 'Ahmed']
  return (
    <>
      <h1 style={pStyles} >Hello World</h1>
      <div>
        <p>{myName === 'Yahia' ? 'Hello Yahia' : 'Hello there'}</p>
        <div>Named: {names.map(el => (
          <p>{el}</p>
        ))}</div>
      </div>
    </>
  )
}

export default App