import React, { Component } from 'react'
import TaskItem from './TaskItem'
import { connect } from 'react-redux';
import * as actions from './../Actions/index';

 class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1
    }
  }

  _onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    let filter = {
      name: name === 'filterName' ? value : this.state.filterName,
      status: name === 'filterStatus' ? value : this.state.filterStatus,
    }
    this.props.onFilterTask(filter)
    this.setState({
      [name]: value
    })
    
  }
  render() {
    
    var { filterName, filterStatus } = this.state;
    var { tasks, filterTask, searchTask , sortTask} = this.props;

    // Filter
    if (filterTask.name) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(filterTask.name.toLowerCase()) !== -1;
      })
    }
    tasks = tasks.filter((task) => {
      if (filterTask.status === -1) {
        return task;
      } else {
        return task.status === (filterTask.status === 1 ? true : false);
      }
    });

    // search
     console.log(searchTask);
     
    // Sort
    if (sortTask.by === 'name') {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sortTask.value;
        else if (a.name < b.name) return -sortTask.value;
        else return 0;
      })
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return -sortTask.value;
        else if (a.status < b.status) return sortTask.value;
        else return 0;
      })
    }

    var elmTasks = tasks.map((task, index) => {
      return <TaskItem key={task.id} index={index } task={task}
       
      />
    })
    return (
      <table className="table table-bordered table-hover mt-15">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td>
              <input type="text"
                className="form-control"
                name="filterName"
                value={filterName}
                onChange = { this._onChange}
              />
            </td>
            <td>
              <select className="form-control"
                name="filterStatus"
                value={filterStatus}
                onChange = { this._onChange}  
                
              >
                <option value={-1}>Tất Cả</option>
                <option value={0}>Ẩn</option>
                <option value={1}>Kích Hoạt</option>
              </select>
            </td>
            <td />
          </tr>
          {/* TaskItem */}
          {elmTasks}
        </tbody>
      </table>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filterTask: state.FilterTask,
    searchTask: state.SearchTask,
    sortTask: state.SortTask
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTask: (filter) => {
      dispatch(actions.filterTask(filter));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);