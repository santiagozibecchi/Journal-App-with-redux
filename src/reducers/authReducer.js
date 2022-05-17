import { types } from "../types/types";
// El state estara vacio cuando el usuario no este autenticado


// Cuando este autenticado se obtiene el uid de user de firebase
// {
//       uid: 321132,
//       name: 'Santiago
// }


const authReducer = (state = {}, action) => {

      switch (action.type) {
            case types.login:
                  return {
                        uid: action.payload.uid,
                        name: action.payload.displayName
                  };

            case types.logout:
                  return {};

            default:
                  return state;
      }



}

export default authReducer