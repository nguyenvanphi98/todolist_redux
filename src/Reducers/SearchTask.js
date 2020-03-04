import * as types from '../Constants/ActionTypes';

var initiaState = {};

var myReducer = (state = initiaState, action) => {
    switch(action.type) {
        case types.SEARCH_TASK:               
            return action.search;
        default: return state;
    }
};

export default myReducer;