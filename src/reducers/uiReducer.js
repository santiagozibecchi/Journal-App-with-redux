import { types } from "../types/types";

const initialState = {
      loading: false,
      msgError: null
}

export const uiReducer = (state = initialState, action) => {

      switch (action.type) {
            case types.uiSetError:
                  return {
                        // como no voy a cambiar el loading lo traigo con el op. ...
                        ...state,
                        msgError: action.payload
                  }

            case types.uiRemoveError:
                  return {
                        // como no voy a cambiar el loading lo traigo con el op. ...
                        ...state,
                        msgError: null
                  }

            case types.uiStartLoading:
                  return {
                        ...state,
                        loading: true
                  }

            case types.uiFinishLoading:
                  return {
                        ...state,
                        loading: false
                  }
                  
      
            default:
                  return state;
      }
}