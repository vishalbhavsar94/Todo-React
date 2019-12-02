import {GET_TODO, DELETE_TODO, ADD_TODO,GETEDIT_TODO, EDIT_TODO} from '../Actions/Type'
const initialState = {
    Todos:[],
    Todo:[]
}
export default function(state = initialState,action){
        //console.log(action.payload);
        
        switch (action.type) {
            case GET_TODO :
                  return{
                      ...state,
                        Todos:action.payload
                  }
            case DELETE_TODO :
            return{
                ...state,
                    Todos:state.Todos.filter(tdo => tdo.id !== action.payload)
            }
            case ADD_TODO:
            return{
                ...state,
                    Todos:[action.payload,...state.Todos]
            }
            case GETEDIT_TODO:
            return{
                ...state,
                    Todo:action.payload
            }
            case EDIT_TODO:
            return{
                ...state,
                    Todos:state.Todos.map(
                        tdo =>
                        tdo.id === action.payload.id
                            ? (tdo = action.payload)
                            : tdo
                      )
            }
            default:
                return state
        }
        
}