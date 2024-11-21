
export const todoReducer = (initialState = [], action) => {
    
    switch (action.type) {
        case '[TODO] Add Todo':
            return[ ...initialState, action.payload ]
           // throw new Error ('Action.type = ABC no esta implementada');
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload )
        
        case '[TODO] Toggle Todo':
            return initialState.map( pikachu => {

                if( pikachu.id === action.payload ){
                    return {
                        ...pikachu,
                        done: !pikachu.done
                    }
                }
                return pikachu;
            })
        
            default:
            return initialState;
        }
    }