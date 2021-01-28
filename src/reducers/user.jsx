export const userReducer =(state={} ,action)=>{
    switch(action.payload){
        case "SET_USER":
            return {...state.payload};
            case "CLEAR_USER":
                return {...state.payload};
                default:
                    return state;
    }
}