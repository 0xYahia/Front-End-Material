import { useState } from 'react'
import Form from './components/Form'
import Logo from './components/Logo'
import PackingList from './components/PackingList'
import Status from './components/Status'

function App() {
  const [items, setItem] = useState([])

  function handleAddItem(item) {
    setItem((items) => [...items, { id: Date.now(), ...item, packed: false }])
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

  // const handleSort = (e) => {
  //   const sortBy = e.target.value ? e.target.value : 'input'
  //   let sortedItems = [...items]
  //   if (sortBy === 'description') {
  //     sortedItems
  //       .slice()
  //       .sort((a, b) => a.description.localeCompare(b.description))
  //   } else if (sortBy === 'packed') {
  //     sortedItems.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
  //   }

  //   setItem(sortedItems)
  // }
  return (
    <>
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleDelete={handleDelete}
        onCheckboxChange={onCheckboxChange}
        handleClear={handleClear}
      />
      <Status items={items} />
    </>
  )
}

export default App
