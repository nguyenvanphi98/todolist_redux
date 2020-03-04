import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../Actions/index';


class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false
    }
  }
  componentDidMount() {
    if (this.props.EditTask && this.props.EditTask.id !== null) {
      this.setState({
        id: this.props.EditTask.id,
        name: this.props.EditTask.name,
        status: this.props.EditTask.status
      })
    }else {
      this._onClear();
    }

  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.EditTask) {
      this.setState({
        id: nextProps.EditTask.id,
        name: nextProps.EditTask.name,
        status: nextProps.EditTask.status
      })

    } else if (!nextProps.EditTask) {
      this.setState({
        id: '',
        name: '',
        status: false
      })
    }
  }
  _onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === 'status') {
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name]: value
    })
  }

  _onSaveTask = (event) => {
    event.preventDefault();
    this.props.onSaveTask({...this.state, createDate: new Date()});
    this._onClear();
    this._onCloseForm();
  }

  _onCloseForm = () => {
    this.props.onCloseForm();
  }

  _onClear = () => {
    this.setState({
      id: '',
      name: '',
      status: false,
    })
  }
  render() {
   
    if(!this.props.isDisplayForm) return null;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title"> {!this.state.id ? 'Thêm Công Việc' : 'Sửa Công Việc'}
            <button type="submit" className="btn btn-warning magrin" onClick={this._onCloseForm}>Clear</button>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this._onSaveTask}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this._onChange}
              />
            </div>
            <label>Trạng Thái :</label>
            <select
              className="form-control"
              required="required"
              name="status"
              value={this.state.status}
              onChange={this._onChange}
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning">Lưu</button>&nbsp;
                     <button type="button" className="btn btn-danger" onClick={this._onClear}>Hủy Bỏ</button>
            </div>
          </form>
        </div>
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    EditTask: state.EditTask
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask : (task) => {
      dispatch(actions.saveTask(task));
    }, 
    onCloseForm : () => {
      dispatch(actions.closeForm())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);