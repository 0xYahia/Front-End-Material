import { useSelector } from "react-redux";

const Details = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct);
  console.log(selectedProduct);
  if (!selectedProduct) return null;
  return (
    <>
      <h1>{selectedProduct.name}</h1>
      <h2>Price: {selectedProduct.price}</h2>
    </>
  );
};

export default Details;
