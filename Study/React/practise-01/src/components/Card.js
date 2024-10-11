

const Card = ({userList}) => {
  console.log(userList);
  const card = userList.map((el, index) => (
    <div className="cardWrapper" key={index} >
      <div>Name: {el.name}</div>
      <div>Age: {el.age}</div>
      <div>Address: {el.address}</div>
      <div>Phone: {el.phone}</div>
  </div>
  ))
  return card
}

export default Card;