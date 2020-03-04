import React, { Component } from 'react'

import { HashRouter as Router, Route, Link, Redirect  } from 'react-router-dom';
import TaskForm from './TaskForm';
import Control from './Control';
import TaskList from './TaskList';
import { connect } from 'react-redux';
import * as actions from './../Actions/index';

class Add extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token")

        let  signIn = true
        if(token == null) {
            signIn = false
        }

    this.state = {
      signIn
    }
  }

  _onTaggleForm = () => {
    var { EditTask } = this.props;
    if(EditTask && EditTask.id !== ''){
      this.props.onOpenForm();
    }else {
      this.props.onTaggleForm();
    }
    this.props.onClearTask({
      id: '',
      name: '',
      status: false
    });
   
  }

  _onSoft = (softBy, softValue) => {
    this.setState({
      softBy: softBy,
      softValue: softValue
    })
    console.log(this.state);
  }

  render() {
    if(this.state.signIn === false){
      return <Redirect to="/log-in/sign-in" />
  }
    var { isDisplayForm } = this.props;

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {/* Form*/}
            <TaskForm/>
          </div>
          <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button type="button" className="btn btn-primary add" onClick={this._onTaggleForm}>
              <span className="" />Thêm Công Việc
             </button>
             <Link to="/log-in/sign-out" className="btn btn-warning sign"><b><i>SignOut</i> </b> </Link>
          
            <Control />

            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* TaskList */}
                <TaskList />
              </div>
            </div>
          </div>
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
      onTaggleForm : () => {
        dispatch(actions.toggleForm())
      }, 
      onClearTask : (task) => {
        dispatch(actions.editTask(task))
      },
      onOpenForm : () => {
        dispatch(actions.openForm())
      }
      
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Add);