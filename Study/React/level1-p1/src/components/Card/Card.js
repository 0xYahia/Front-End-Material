import style from './Card.module.css'

const Card = ({id, name, age, address, phone, gender, deleteHandler}) => {
  return (
    <div className={style.cardWrapper} style={{background: gender ==='Female' ? 'pink' : 'green' }} >
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Address: {address}</div>
      <div>Phone: {phone}</div>
      <div className={style.deleteBtn} onClick={(e) => deleteHandler(e, id)} >x</div>
    </div>
  );
}

export default Card;