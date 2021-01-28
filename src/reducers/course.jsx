export const courseReducer = ( state={} ,action) =>{
    switch(action.type){
        case "GET_COURSE":
            return {...state.payload};
            default:
                return state;
    }
}