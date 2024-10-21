import './index.css'

const Menu = ({ pizzaList }) => {
  console.log(pizzaList)

  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <ul className='pizzas'>
        {pizzaList.length > 0 ? (
          pizzaList.map((el, index) => (
            <li key={index} className='pizza'>
              <img src={el.photoName} alt={el.name} />
              <div>
                <h3>{el.name}</h3>
                <p>{el.ingredients}</p>
                <span>{el.price}</span>
              </div>
            </li>
          ))
        ) : (
          <li className='pizzas='>Not there any pizza</li>
        )}
      </ul>
    </main>
  )
}

export default Menu
