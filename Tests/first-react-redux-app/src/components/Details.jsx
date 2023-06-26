import { connect } from "react-redux";

const Details = (props) => {
  console.log(props);
  if (!props.selectProduct) return null;
  return (
    <>
      <h1>{props.selectProduct.name}</h1>
      <h1>{props.selectProduct.price}</h1>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    selectProduct: state.selectProduct,
  };
};

export default connect(mapStateToProps)(Details);
