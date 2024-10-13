import '../index.css'

const ShapeOne = ({ item }) => {
  return (
    <div className='shapeOne'>
      <ul>
        <li>{item?.name}</li>
        <li>{item?.age}</li>
      </ul>
    </div>
  )
}

export default ShapeOne
