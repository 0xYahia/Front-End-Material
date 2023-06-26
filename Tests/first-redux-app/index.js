const { combineReducers, createStore } = require("redux");
// console.log(combineReducers);

//----------------------------- Action Creators -----------------------------//

function createPolicy(name, amount) {
  // Action
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
}

function createClaim(name, amount) {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amount: amount,
    },
  };
}

function deletePolicy(name) {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name,
    },
  };
}

//----------------------------- Reducers -----------------------------//

function policiesReducer(listOfPolicies = [], action) {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter((p) => p.name !== action.payload.name);
  }

  return listOfPolicies;
}

function claimsReducer(listOfClaims = [], action) {
  if (action.type === "CREATE_CLAIM") {
    return [...listOfClaims, action.payload];
  }
  return listOfClaims;
}

function accountantReducer(amoutOfMoney = 100, action) {
  if (action.type === "CREATE_POLICY") {
    return amoutOfMoney + action.payload.amount;
  } else if (action.type === "CREATE_CLAIM") {
    amoutOfMoney - action.payload.amount;
  }
  return amoutOfMoney;
}

// =======> Create root reducer

const rootReducer = combineReducers({
  policies: policiesReducer,
  claims: claimsReducer,
  money: accountantReducer,
});

// =======> create store

const store = createStore(rootReducer);

// console.log(store.getState());

// =======> Test

const action1 = createPolicy("Yahia", 90);
store.dispatch(action1);

const action2 = createPolicy("Ali", 30);
store.dispatch(action2);

const action3 = createClaim("Ali", 200);
store.dispatch(action3);

console.log(store.getState());
