import { combineReducers } from 'redux';
import tasks from './Tasks';
import isDisplayForm from './isDisplayForm';
import EditTask from './EditTask';
import FilterTask from './FilterTask';
import SearchTask from './SearchTask';
import SortTask from './SortTask';


const myReducers = combineReducers({
    tasks,
    isDisplayForm,
    EditTask,
    FilterTask, 
    SearchTask,
    SortTask
})
export default myReducers;