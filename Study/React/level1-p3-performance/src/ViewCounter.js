const ViewCounter = ({ num, increment }) => {
  return (
    <div>
      <button onClick={increment}>+</button>
      <p>{num}</p>
    </div>
  )
}

export default ViewCounter
