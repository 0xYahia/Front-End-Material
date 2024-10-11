
import Card from "../Card/Card";

const CardList = ({userList, deleteHandler}) => {
  const card = userList.map((el, index) => (
    <Card key={el.id} {...el} deleteHandler={deleteHandler} />
  ))
  return card
}

export default CardList;