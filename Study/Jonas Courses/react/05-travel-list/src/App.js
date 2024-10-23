import { useState } from 'react'

function App() {
  return (
    <>
      <Logo />
      <Form />
    </>
  )
}

export default App

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>
}
function Form() {
  const [items, setItem] = useState([
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: false },
  ])

  const [formState, setFormState] = useState({
    description: '',
    quantity: 1,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formState.description === '') return
    console.log(items)
    setItem([...items, { id: Date.now(), ...formState, packed: false }])
  }

  const handleDelete = (itemId) => {
    setItem((curItems) => curItems.filter((item) => item.id !== itemId))
  }

  const onCheckboxChange = (itemId) => {
    setItem((curItems) =>
      curItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    )
  }

  const handleClear = () => {
    const isDelete = window.confirm(
      'Are you sure you want to delete all items?'
    )
    if (isDelete) {
      setItem([])
    }
  }

  const handleSort = (e) => {
    const sortBy = e.target.value ? e.target.value : 'input'
    console.log(sortBy)
    let sortedItems = [...items]
    if (sortBy === 'description') {
      sortedItems.sort((a, b) => a.description.localeCompare(b.description))
    } else if (sortBy === 'packed') {
      sortedItems.sort((a, b) => a.packed - b.packed)
    }

    setItem(sortedItems)
  }

  return (
    <>
      <div className='add-form'>
        <h3>What do you need for your 😍 trip?</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
          <select
            value={formState.quantity}
            onChange={(e) =>
              setFormState({ ...formState, quantity: +e.target.value })
            }
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

          <input
            value={formState.description}
            onChange={(e) =>
              setFormState({ ...formState, description: e.target.value })
            }
            type='text'
            placeholder='item...'
          />
          <button>ADD</button>
        </form>
      </div>
      <PackingList
        items={items}
        handleDelete={handleDelete}
        onCheckboxChange={onCheckboxChange}
        handleClear={handleClear}
        handleSort={handleSort}
      />
      <Status items={items} />
    </>
  )
}
function PackingList({
  items,
  handleDelete,
  onCheckboxChange,
  handleClear,
  handleSort,
}) {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onCheckboxChange={onCheckboxChange}
            handleDelete={handleDelete}
          />
        ))}
      </ul>

      <div className='actions'>
        <select onChange={handleSort}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button onClick={handleClear}>CLEAR LIST</button>
      </div>
    </div>
  )
}

function Item({ item, onCheckboxChange, handleDelete }) {
  return (
    <li>
      <input
        type='checkbox'
        checked={item.packed}
        onChange={() => onCheckboxChange(item.id)}
      />
      <span style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  )
}
function Status({ items }) {
  const packedItemsCount = items.filter((item) => item.packed).length
  const percentage = ((packedItemsCount / items.length) * 100).toFixed(2)
  return (
    <footer className='stats'>
      {items.length === 0 ? (
        <p>Start adding some items to your packing list 🚀</p>
      ) : (
        <em>
          💼 You have {items.length} items on your list, and you already packed{' '}
          {packedItemsCount} ({percentage} %)
        </em>
      )}
    </footer>
  )
}
