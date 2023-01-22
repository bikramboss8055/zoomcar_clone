import { auth_login, auth_logout,isMsgFalse, auth_success, auth_error, is_loading } from "./Auth.actionType";
const token = localStorage.getItem("authToken");
let initialState = {
    isAuth: !!token,
    token: token,
    error: false,
    isErrorMsg : null,
    isLoadingLoder : false,
    isSuccessMsg : null
}

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case auth_login: {
        
        return {
          ...state,
          isAuth: true,
          token: payload.token,
          error: false,
          isLoadingLoder : false,
          isSuccessMsg : payload.msg
        };
      }
      case  isMsgFalse:{
        return {
          ...state,
          isSuccessMsg : null,
          error : false
        }
      }
      case auth_error: {
        return {
          ...state,
          isAuth: false,
          token: payload,
          isErrorMsg : payload.msg,
          error: true,
          isLoadingLoder : false
        };
      }
      case is_loading :{
        return {
          ...state,
          isLoadingLoder : true,
        }
      }
      case auth_logout: {
        localStorage.removeItem("authToken");
        return {
          ...state,
          isAuth: false,
          token: "",
          isLoadingLoder : false
        };
      }
      case auth_success:{
        return {
          ...state,
          isLoadingLoder : false,
          isSuccessMsg : payload.msg
        }
      }
      default:
        return state;
    }
  };