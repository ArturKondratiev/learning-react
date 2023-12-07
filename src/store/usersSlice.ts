const initialStateUsers = {
  users: [],
};

export default function usersReducer(state = initialStateUsers, action: any) {
  switch(action.type) {
    case "users/request":
      return { ...state, users: action.payload }
    default:
      return state;
  }
}

export function addUsers(users: any[]) {
  return { type: "users/request", payload: users }
}