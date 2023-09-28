import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectProduct } from "../redux/selectedProductSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Big Burger",
      price: 50,
      inCart: false,
      category: 1,
      count: 0,
    },
    {
      id: 2,
      name: "Medium Burger",
      price: 40,
      inCart: false,
      category: 1,
      count: 0,
    },
    {
      id: 3,
      name: "Small Burger",
      price: 30,
      inCart: false,
      category: 1,
      count: 0,
    },
  ]);
  const handleClick = (product) => {
    dispatch(selectProduct({ product }));
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* {props.products.map((product) => ( */}
          {products.map((product) => (
            <tr key={product.id}>
              <th>{product.name}</th>
              <th>{product.name}</th>
              <th>
                <button
                  onClick={() => {
                    handleClick(product);
                  }}
                  className="btn btn-primary btn-sm"
                >
                  Show Details
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Menu;
