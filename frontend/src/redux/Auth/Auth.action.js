import { auth_login, auth_logout, auth_success, auth_error, is_loading } from "./Auth.actionType";



export const authlogin = (loginData) => async (dispatch) => {
    dispatch({type : is_loading})
    try {
      console.log(loginData)
      let res = await fetch(`https://taupe-dhole-boot.cyclic.app/authentication/login`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(loginData)
      });
      let data = await res.json();
      // console.log(data);
      localStorage.setItem("authToken", data.token);
      dispatch({ type: auth_login, payload : {token : data.token, msg : data.msg} });
      // console.log(res.data);
    //   return res.data;
    } catch (error) {
      dispatch({ type: auth_error, payload : { msg : error.msg} });
    }
  };

  export const authSignup = (signupData) => async (dispatch) =>{
    dispatch({type : is_loading})
   try{
    let res = await fetch(`https://taupe-dhole-boot.cyclic.app/authentication/signup`, {
      method : "POST",
      headers : {
          "Content-Type" : "application/json"
      },
      body : JSON.stringify(signupData)
    });
    let data = await res.json();
    dispatch({ type: auth_success, payload : { msg : data.msg} });
   }catch(error){
    dispatch({ type: auth_error, payload : { msg : error.msg} });
   }
  }