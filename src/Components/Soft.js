import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../Actions/index';

class Soft extends Component {

    _onClick = (sortBy, sortValue) => {
        this.props.onSortTask({
            by: sortBy,
            value: sortValue
        })
    }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li className='soft_hover' onClick={() => this._onClick('name', 1)}>
                            <a role="button"

                            >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
            </span>
                            </a>
                        </li>
                        <li className='soft_hover' onClick={() => this._onClick('name', -1)} >
                            <a role="button">
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
            </span>
                            </a>
                        </li>
                        <li role="separator" className="divider" />
                        <li className='soft_hover' onClick={() => this._onClick('status', 1)}><a role="button">Trạng Thái Kích Hoạt</a></li>
                        <li className='soft_hover' onClick={() => this._onClick('status', -1)}><a role="button">Trạng Thái Ẩn</a></li>
                    </ul>
                </div>
            </div>


        )
    }
}
const mapStateToProps = (state) => {
    return {
      sortTask: state.SortTask
    }
  }
  
  const mapDispatchToProps = (dispatch, props) => {
    return {
        onSortTask : (sort) => {
            dispatch(actions.sortTask(sort))
        }  
      }
    }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Soft);
