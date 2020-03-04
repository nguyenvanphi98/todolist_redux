import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from './../Actions/index';
 
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    _onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }

    _onSearch = () => {
        this.props.onSearchTask(this.state.search);  
    }

    render() {
        var { search } = this.state;

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input type="text"
                        className="form-control"
                        placeholder="Nhập từ khóa..."
                        name="search"
                        value={search}
                        onChange={this._onChange}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-primary search" type="submit" 
                        onClick={this._onSearch}>
                            <span className="" />Tìm
                     </button>
                    </span>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
      
    }
  }
  
  const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearchTask : (search) => {
            dispatch(actions.searchTask(search))
        }  
      }
    }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Search);