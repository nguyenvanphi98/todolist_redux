import * as types from '../Constants/ActionTypes';

var initiaState = {
    id: '',
    name: '',
    status: false,
};

var myReducer = (state = initiaState, action) => {
    switch(action.type) {
        case types.EDIT_TASK: 
            return action.task;
        default: return state;
    }
};

export default myReducer;