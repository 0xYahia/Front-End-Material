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

export default Item
