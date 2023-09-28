export default function selectProduct(product) {
  return {
    type: "SELECT_PRODUCT",
    payload: {
      product,
    },
  };
}

export function fetchProducts() {
  return async (dispatch) => {
    const data = await fetchMenu();
    console.log(data);

    dispatch({
      type: "FETCH_PRODUCTS",
      payload: {
        products: data,
      },
    });
  };
}
