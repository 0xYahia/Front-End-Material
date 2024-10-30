function Status({ items }) {
  if (!items.length)
    return (
      <footer className='stats'>
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    )
  const packedItemsCount = items.filter((item) => item.packed).length
  const percentage = Math.round((packedItemsCount / items.length) * 100)
  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? 'You go everything! Ready to go ✈️'
          : `You have ${items.length} items on your list, and you already packed
          ${packedItemsCount} (${percentage} %)`}
      </em>
    </footer>
  )
}

export default Status
