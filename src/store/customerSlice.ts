import { createSlice } from "@reduxjs/toolkit";

const initialStateCustomer = {
  fullName: '',
  age: '',
  createdAt: '',
};

const customerSlice = createSlice({
  name: 'customer',
  initialState: initialStateCustomer,
  reducers: {
    createCustomer(state, action) {
      state.fullName = action.payload.fullName;
      state.age = action.payload.age;
      state.createdAt = action.payload.createdAt;
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  }   
})

console.log(customerSlice);
export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;
// const CUSTOMER_ACTION = { CREATE : 'customer/createCustomer', UPDATE: 'customer/updateName' };

// export default function customerReducer(state = initialStateCustomer, action: any) {
//   switch(action.type) {
//     case CUSTOMER_ACTION.CREATE:
//       return { ...state, fullName: action.payload.fullName, age: action.payload.age, createdAt: action.payload.createdAt };
//     case CUSTOMER_ACTION.UPDATE:
//       return { ...state, fullName: action.payload };
//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName: string, age: number) {
//   return { type: CUSTOMER_ACTION.CREATE, payload: { fullName, age, createdAt: new Date().toISOString() } };
// }

// export function updateCustomer(fullName: string) {
//   return { type: CUSTOMER_ACTION.UPDATE, payload: fullName };
// }

// store.dispatch(createCustomer('Arthur K.', 24));
// console.log(store.getState());
// store.dispatch(updateCustomer('Artur Kondratiev'));
// console.log(store.getState());

