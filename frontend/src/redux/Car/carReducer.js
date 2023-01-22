
import * as types from "./actionTypes"

const initialState={
    cars:[],
    isLoading:false,
    isError:false,
}


const carReducer=(oldState=initialState,action)=>{
    const {type,payload} =action

  // console.log(payload+" "+"hii")
    switch(type){

        case types.GET_CAR_REQUEST:
             return{...oldState,isLoading:true}

        case types.GET_CAR_SUCCESS:
            return{...oldState,isLoading:false,cars:payload}

        case types.GET_CAR_ERROR:
            return {...oldState,isLoading:false,isError:true}

        default:
            return oldState
    }

}

export {carReducer}