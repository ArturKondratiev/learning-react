import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
// const ACCOUNT_ACTION = { DEPOSIT : "account/deposit", WITHDRAW: "account/withdraw", REQUEST_LOAN: "account/requestLoan", PAYLOAN: "account/payLoan"};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance = state.balance + action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan(state, action) {
      if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
    },
    payLoan(state, action) {
      state.loan = 0;
      state.loanPurpose = '';
      state.balance = state.balance - state.loan;
    }
  }
});

// console.log(accountSlice);

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;
// export default function accountReducer(state = initialStateAccount, action: any) {
//   switch(action.type) {
//     case ACCOUNT_ACTION.DEPOSIT:
//      return { ...state, balance: state.balance + action.payload };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {...state, loan: action.payload.amount, loanPurpose: action.payload.purpose, balance: state.balance + action.payload.amount}
//     case "account/payLoan":
//       return {...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan}
//     default:
//       return state;
//   }
// }

// store.dispatch({type: 'account/deposit', payload: 500});
// console.log(store.getState());
// store.dispatch({type: "account/withdraw", payload: 200})
// console.log(store.getState());
// store.dispatch({type: "account/requestLoan", payload: {amount: 1000, purpose: 'Buy a car'}})
// console.log(store.getState());
// store.dispatch({type: "account/payLoan"});
// console.log(store.getState());

// export function deposit(amount: number) {
//   return { type: ACCOUNT_ACTION.DEPOSIT, payload: amount }
// }

// export function withdraw(amount: number) {
//   return { type: "account/withdraw", payload: amount }
// }

// export function requestLoan(amount: number, purpose: string) {
//   return { type: "account/requestLoan", payload: { amount, purpose } }
// }

// export function payLoan() {
//   return { type: "account/payLoan" }
// }

// store.dispatch(deposit(500));
// console.log(store.getState());
// store.dispatch(withdraw(200));
// console.log(store.getState());
// store.dispatch(requestLoan(200, 'Buy something'));
// console.log(store.getState());
// store.dispatch(payLoan());
// console.log(store.getState());