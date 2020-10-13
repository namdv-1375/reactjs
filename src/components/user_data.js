import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Paginate from '../shared/paginate';

export default class UserData extends Component {
  renderButtonAddUser() {
    if (this.props.isAdded) {return null;}

    return (
      <tr>
        <td colSpan='3' className='text-center' width='100%'>
          <Button variant='primary' onClick={() => this.props.addUserHandler()}>Add User</Button>
        </td>
      </tr>
    )
  }

  render() {
    let {
      users, isAdded, isEdited, isCanceled,
      editUserHandler, deleteUserHandler
    } = this.props;

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
          <Paginate data={users}
            currentUser={this.state}
            isAdded={isAdded} isEdited={isEdited} isCanceled={isCanceled}
            editUserHandler={editUserHandler.bind(this)}
            deleteUserHandler={deleteUserHandler.bind(this)}
          />
          {this.renderButtonAddUser()}
        </tbody>
      </table>
    );
  }
}

UserData.propTypes = {
  users: PropTypes.array,
  addUserHandler: PropTypes.func,
  editUserHandler: PropTypes.func,
  deleteUserHandler: PropTypes.func,
  isAdded: PropTypes.bool
};
