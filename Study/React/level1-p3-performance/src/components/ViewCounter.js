import '../App.css'

const ViewCounter = ({ num, increment }) => {
  console.log('view counter component');
  return (
    <div className='viewCounter'>
      <button onClick={increment}>+</button>
      <div>{num}</div>
    </div>
  )
}

export default ViewCounter
