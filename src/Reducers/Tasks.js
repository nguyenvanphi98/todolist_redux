import * as types from './../Constants/ActionTypes';

 var _id = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

 var _ramdomId = () => {
    return  _id() +  _id() + '-' +  _id() + '-' +  _id() + '-' +  _id() + '-' +  _id() + '-' +  _id() + '-'
      +  _id() + '-' +  _id();
  }

  var _findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    })
    return result;
  }

var data = JSON.parse(localStorage.getItem('tasks'));
var initiaState = data ? data : []; 

var myReducer = (state = initiaState, action) => {
    switch(action.type) {
        case types.LIST_ALL: 
            return state;

        case types.SAVE_TASK:
            var task = {
                id: action.task.id,
                name: action.task.name,
                status: (action.task.status === 'true'|| action.task.status === true ) ? true : false 
            };
            if(!task.id){
              task.id = _ramdomId();
              state.push(task);
            }else {
              index = _findIndex(state, task.id)
              state[index] = task;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];

        case types.UPDATE_STATUS:
            var id = action.id;
            var index = _findIndex(state,id);
            var closeStatus = {...state[index]};
            closeStatus.status = !closeStatus.status;
            // state.splice(index, 1);
            // state.push(closeStatus);
            state[index] = closeStatus;
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]

        case types.DELETE_TASK: 
            var id = action.id;
            var index = _findIndex(state, id);
            state.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]
        default: return state;
    }
};

export default myReducer;