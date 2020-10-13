import React, { Component } from 'react';
import UserDetail from '../components/user_detail';

export default class Paginate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data || [],
      currentPage: 1,
      dataPerPage: 3
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({data: nextProps.data});
  }

  renderData() {
    let {
      isAdded, isEdited, isCanceled,
      currentUser, editUserHandler, deleteUserHandler
    } = this.props;
    let { data, currentPage, dataPerPage } = this.state;
    let indexOfLastData = currentPage * dataPerPage;
    let indexOfFirstData = indexOfLastData - dataPerPage;
    let currentData = data.slice(indexOfFirstData, indexOfLastData);

    if (data.length <= dataPerPage) {
      currentData = data
    }

    let listUserDetail = currentData.map((user, index) => {
      return <UserDetail
        user={user} index={index} currentUser={currentUser} key={index}
        isAdded={isAdded} isEdited={isEdited} isCanceled={isCanceled}
        editUserHandler={editUserHandler.bind(this)}
        deleteUserHandler={deleteUserHandler.bind(this)}
      />
    });

    return listUserDetail;
  }

  renderPageNumbers() {
    let { data, dataPerPage, currentPage } = this.state;
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
      pageNumbers.push(i);
    }

    let totalPageNumbers = pageNumbers.map(number => {
      return (
        <li className={`page-item ${number === currentPage ? 'active' : null}`} key={number}>
          <a className='page-link' href='#' id={number} onClick={this.handleClick}>
            {number}
          </a>
        </li>
      );
    });

    if (pageNumbers.length <= 1) {return null;}

    return (
      <tr>
        <ul className='pagination pd-top-15 pd-left-15'>
          {totalPageNumbers}
        </ul>
      </tr>
    )
  }

  render() {
    return (
      <>
        {this.renderData()}
        {this.renderPageNumbers()}
      </>
    );
  }
}