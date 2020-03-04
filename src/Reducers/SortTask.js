import * as types from '../Constants/ActionTypes';

var initiaState = {
    by: 'name',
    value: 1
};

var myReducer = (state = initiaState, action) => {
    switch(action.type) {
        case types.SORT_TASK:        
            return {
                by: action.sort.by,
                value: action.sort.value
            };
        default: return state;
    }
};

export default myReducer;