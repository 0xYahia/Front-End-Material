const ShapeTwo = ({ item }) => {
  return (
    <div className='shapeTwo'>
      <ul>
        <li>{item?.name}</li>
        <li>{item?.age}</li>
      </ul>
    </div>
  )
}

export default ShapeTwo
