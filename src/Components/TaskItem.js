import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../Actions/index';

 class TaskItem extends Component {
  _onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);

  }

  _onDelete = () => {
    this.props.onDeletaTask(this.props.task.id);
    this.props.onCloseForm();

  }

  _onEdit = () => {
    this.props.onOpenForm();
    this.props.onEditTask(this.props.task);
  }

  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name} </td>
    {/* {...this.state, createDate: new Date()} */}
        <td className="text-center">
          <span className={task.status === true ? 'btn btn-success' : 'btn btn-danger'}
            onClick={this._onUpdateStatus}>
            {task.status === true ? 'Kích hoạt' : 'Ẩn'}

          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning " onClick={this._onEdit}>
            <span className="" />Sửa
              </button>
          &nbsp;
              <button type="button" className="btn btn-danger" onClick={this._onDelete}>
            <span className="" />Xóa</button>
        </td>
      </tr>

    )
  }
}
const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus : (id) => {
        dispatch(actions.updateStatus(id))
    }, 
    onDeletaTask : (id) => {
        dispatch(actions.deleteTask(id))
    }, 
    onCloseForm : () => {
        dispatch(actions.closeForm());
    }, 
    onOpenForm : () => {
      dispatch(actions.openForm())
    }, 
    onEditTask : (task) => {
      dispatch(actions.editTask(task))
    }
  }
}

export default connect(null, mapDispatchToProps)(TaskItem);