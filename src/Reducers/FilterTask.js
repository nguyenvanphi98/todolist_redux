import * as types from '../Constants/ActionTypes';

var initiaState = {
    name: '',
    status: -1
};

var myReducer = (state = initiaState, action) => {
    switch(action.type) {
        case types.FILTER_TASK:        
            return {
                name: action.filter.name,
                status: parseInt(action.filter.status, 10)
            };
        default: return state;
    }
};

export default myReducer;