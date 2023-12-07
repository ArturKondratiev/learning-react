const initialStateCustomer = {
  fullName: '',
  age: '',
  createdAt: '',
};
const CUSTOMER_ACTION = { CREATE : 'customer/createCustomer', UPDATE: 'customer/updateName' };

export default function customerReducer(state = initialStateCustomer, action: any) {
  switch(action.type) {
    case CUSTOMER_ACTION.CREATE:
      return { ...state, fullName: action.payload.fullName, age: action.payload.age, createdAt: action.payload.createdAt };
    case CUSTOMER_ACTION.UPDATE:
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

export function createCustomer(fullName: string, age: number) {
  return { type: CUSTOMER_ACTION.CREATE, payload: { fullName, age, createdAt: new Date().toISOString() } };
}

export function updateCustomer(fullName: string) {
  return { type: CUSTOMER_ACTION.UPDATE, payload: fullName };
}

// store.dispatch(createCustomer('Arthur K.', 24));
// console.log(store.getState());
// store.dispatch(updateCustomer('Artur Kondratiev'));
// console.log(store.getState());

