import './index.css'

const Menu = ({ pizzaList }) => {
  console.log(pizzaList)

  return (
    <main className='menu'>
      <h2>Our menu</h2>
      {pizzaList.length > 0 ? (
        pizzaList.map((el, index) => (
          <div key={index}>
            <img src={el.photoName} alt={el.name} />
            <h3>{el.name}</h3>
            <p>{el.ingredients}</p>
          </div>
        ))
      ) : (
        <p>Not there any pizza</p>
      )}
    </main>
  )
}

export default Menu
