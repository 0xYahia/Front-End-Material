import { connect, useDispatch, useSelector } from "react-redux";
import selectProduct, { fetchProducts } from "../actions";
import { useEffect } from "react";

const Menu = (props) => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleClick = (product) => {
    // const action = selectProduct(product);
    // props.dispatch(action);
    // OR
    // props.selectProduct(product);
    // OR
    dispatch(selectProduct(product));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(props);
  // console.log(props.selectProduct);
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

// const mapStateToProps = (state) => {
//   return { products: state.products, selectProduct: state.selectProduct };
// };

// export default connect(mapStateToProps, { selectProduct })(Menu);

export default Menu;
