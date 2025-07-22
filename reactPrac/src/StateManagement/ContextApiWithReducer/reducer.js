export const initialState={
    userFetchState:'idle',
    users:[]
}

export function userReducer(state,action){
    switch(action.type)
    {   case 'USER_FETCH_INPROGRESS':
            return({...state,userFetchState:'inProgress',users:[]})
        case 'USER_FETCH_SUCCESS':
            return({...state,userFetchState:'success',users:action.payload})
        case 'USER_FETCH_ERROR':
            return({...state,userFetchState:'error',users:[]})  
            case 'USER_FETCH_ERROR_TIMEOUT':
                return({...state,userFetchState:'timeOutError',users:[]})
        default:
            return state
    }
}