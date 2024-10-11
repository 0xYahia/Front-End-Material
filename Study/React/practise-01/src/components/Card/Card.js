
import style from './Card.module.css'
const Card = ({userList, type, deleteHandler}) => {
  const card = userList.map((el, index) => (
    <div className={style.cardWrapper} key={index} style={{background: type ==='girls' ? 'pink' : 'green' }} >
      <div>Name: {el.name}</div>
      <div>Age: {el.age}</div>
      <div>Address: {el.address}</div>
      <div>Phone: {el.phone}</div>
      <div className={style.deleteBtn} onClick={(e) => deleteHandler(e, index)} >x</div>
  </div>
  ))
  return card
}

export default Card;