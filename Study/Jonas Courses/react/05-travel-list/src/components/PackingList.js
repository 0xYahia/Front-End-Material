import { useMemo, useState } from 'react'
import Item from './Item'

function PackingList({ items, handleDelete, onCheckboxChange, handleClear }) {
  const [sortedBy, setSortedBy] = useState('input')

  let sortedItems = useMemo(() => {
    if (sortedBy === 'description') {
      return [...items].sort((a, b) =>
        a.description.localeCompare(b.description)
      )
    } else if (sortedBy === 'packed') {
      return [...items].sort((a, b) => a.packed - b.packed)
    }
    return items
  }, [items, sortedBy])

  // let sortedItems;
  // if (sortedBy === 'input') {
  //   sortedItems = items
  // } else if (sortedBy === 'description') {
  //   sortedItems = items.toSorted((a, b) =>
  //     a.description.localeCompare(b.description)
  //   )
  // } else if (sortedBy === 'packed') {
  //   sortedItems = items.toSorted((a, b) => a.packed - b.packed)
  // }

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onCheckboxChange={onCheckboxChange}
            handleDelete={handleDelete}
          />
        ))}
      </ul>

      <div className='actions'>
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button onClick={handleClear}>CLEAR LIST</button>
      </div>
    </div>
  )
}

export default PackingList
