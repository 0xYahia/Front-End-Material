import { useParams } from "react-router-dom";

const Proudct = () => {
  const { productId, country } = useParams()
  return (
    <h1>Proudct {productId} {country}</h1>
  );
}

export default Proudct;