// constants
const UPDATE_FOOD = 'UPDATE_FOOD';
const UPDATE_INPUT = 'UPDATE_INPUT';

//{ action creators

export function updateInput(e){
    return {
        type: UPDATE_INPUT,
        payload: e.target.value
    }
}

export function updateFood(food) {
    return {
        type: UPDATE_FOOD,
        payload: food
    }
}



// initial state
const initialState = {
    food: 'pizza'
    , input: ''
}



// reducer
export default function foodReducer( state = initialState, action) {
    switch( action.type) {
        case UPDATE_INPUT:
            return {
                ...state,
                input: action.payload
            }
        
        case UPDATE_FOOD:
            return {
                ...state
                , food: action.payload
            };
        default: 
            return state;
    }   
}