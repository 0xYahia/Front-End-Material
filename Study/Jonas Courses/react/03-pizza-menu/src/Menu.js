import './index.css'
import Pizza from './Pizza'

const Menu = ({ pizzaList }) => {
  console.log(pizzaList)
  const pizza = pizzaList
  const numPizzas = pizza.length

  return (
    <main className='menu'>
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from out stone oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizza.length > 0
              ? pizza.map((pizza, index) => (
                  <Pizza pizzaObj={pizza} key={index} />
                ))
              : null}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  )
}

export default Menu
