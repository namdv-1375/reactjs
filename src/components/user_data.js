import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      isHover: false
    }
  }

  onMouseEnterHandler(id) {
    this.setState({
      id: id, isHover: true
    });
  }

  onMouseLeaveHandler(id) {
    this.setState({
      id: id, isHover: false
    });
  }

  onClickEditUserHandler(id) {
    let user = this.props.users.find(u => u.id === id);
    this.props.editUser(user);
  }

  onClickDeleteUserHandler(id) {
    let user = this.props.users.find(u => u.id === id);
    this.props.deleteUser(user);
  }

  renderButton(id) {
    let { currentUser, isAddUser } = this.props
    if (isAddUser || currentUser.id !== null && !currentUser.isCanceled && !currentUser.isUpdated) {return null;}

    if (this.state.id === id && this.state.isHover) {
      return <div>
        <span onClick={() => this.onClickEditUserHandler(id)}>
          <i className='fa fa-edit mg-r-10 custom-icon-action'></i>
        </span>
        <span onClick={() => this.onClickDeleteUserHandler(id)}>
          <i className='fa fa-trash custom-icon-action'></i>
        </span>
      </div>
    }
  }

  renderUserData() {
    const {users} = this.props;
    const rows = users.map((user, index) => {
      return (
        <tr key={`user-${index}`}
          onMouseEnter={() => this.onMouseEnterHandler(user.id)}
          onMouseLeave={() => this.onMouseLeaveHandler(user.id)}>
          <td className='text-left' width='20%'>{user.name}</td>
          <td className='text-left' width='20%%'>{user.email}</td>
          <td className='text-center' width='10%'>{this.renderButton(user.id)}</td>
        </tr>
      );
    });

    return rows;
  }

  renderAddUser() {
    return (
      <tr>
        <td colSpan='3' className='text-center' width='100%'>
          <Button variant='primary' onClick={() => this.props.addUserHandler()}>Add User</Button>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className='table table-bordered'>
        <thead>
          <tr>
            <td className='text-left'>{'Name'}</td>
            <td className='text-left'>{'Email'}</td>
            <td className='text-center'>{'Action'}</td>
          </tr>
        </thead>
        <tbody>
          {this.renderUserData()}
          {this.props.isAddUser ? null : this.renderAddUser()}
        </tbody>
      </table>
    );
  }
}

UserData.propTypes = {
  users: PropTypes.array,
  editUser: PropTypes.func,
  deleteUser: PropTypes.func,
  isAddUser: PropTypes.bool
};
