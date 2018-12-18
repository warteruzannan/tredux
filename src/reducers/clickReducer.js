import { CLICK_UPDATE_VALUE } from '../actions/actionsTypes'

const initialState = {
    newValue:''
}


/**
 * Redruce to click on buton 'click me'
 * @param {*} state 
 * @param {*} action 
 */
export const clickReducer = (state = initialState, action) => {
    switch(action.type){
        case CLICK_UPDATE_VALUE:
            return {
                ...state,
                newValue:action.newValue
            };
        default:
            return state;
    }
}