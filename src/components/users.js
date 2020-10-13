import React, { Component } from 'react';
import UserData from './user_data';
import UserForm from './user_form';
import CurrentTime from '../shared/current_time';
import CountUpTime from '../shared/count_up_time';
import { Wave } from 'react-animated-text';

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: JSON.parse(localStorage.getItem('users')) || [],
      focusUserId: null,
      isAdded: false,
      isEdited: false,
      isSaved: false,
      isCanceled: false
    }
  }

  componentDidUpdate(){
    localStorage.setItem('users', JSON.stringify(this.state.users));
  }

  addUserHandler() {
    this.setState({
      focusUserId: null,
      isAdded: true,
      isEdited: false,
      isCanceled: false,
      isSaved: false
    })
  }

  editUserHandler(id) {
    this.setState({
      focusUserId: id,
      isAdded: false,
      isEdited: true,
      isCanceled: false,
      isSaved: false
    })
  }

  deleteUserHandler(id) {
    let filterUsers = this.state.users.filter(user => user.id !== id);
    this.setState({users: filterUsers})
  }

  onSubmitForm(focusUser, action) {
    let newState = this.state;
    let newUsers = newState.users.map(u => u.id === focusUser.id ? focusUser : u);

    if (action === 'cancel') {
      newState = Object.assign(newState, {isCanceled: true, isAdded: false, isEdited: false, isSaved: false})
    } else {
      newState = Object.assign(newState, {isSaved: true, isCanceled: false, isEdited: false})
    }

    if (this.state.isCanceled) {
      this.setState({users: this.state.users, isAdded: false})
    } else if (this.state.isAdded) {
      this.setState({
        users: [...this.state.users, focusUser],
        isAdded: false
      })
    } else {
      this.setState({users: newUsers, isAdded: false})
    }
  }

  renderUserForm() {
    let { isAdded, isCanceled, isSaved, focusUserId, users } = this.state;
    if (isCanceled || isSaved || (!isAdded && focusUserId === null)) {return null;}

    return <UserForm
      users={users}
      focusUserId={focusUserId}
      isAdded={isAdded}
      isSaved={isSaved}
      isCanceled={isCanceled}
      onSubmitForm={this.onSubmitForm.bind(this)}
    />
  }

  renderUserData() {
    let { isAdded, isEdited, isCanceled, focusUserId, users } = this.state;

    return <UserData
      users={users}
      focusUserId={focusUserId}
      isAdded={isAdded}
      isEdited={isEdited}
      isCanceled={isCanceled}
      addUserHandler={this.addUserHandler.bind(this)}
      editUserHandler={this.editUserHandler.bind(this)}
      deleteUserHandler={this.deleteUserHandler.bind(this)}
    />
  }

  render() {
    return (
      <div>
        <div>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <td className='text-left'><h3>{'Exercise 2'}</h3></td>
                <td className='text-right'>
                  <CountUpTime />
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td width='50%'>
                  {this.renderUserData()}
                </td>
                <td>
                  {this.renderUserForm()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='text-center'>
          <Wave text="Khó vãi (╥_╥)" effect="stretch" effectChange={2.2} />
          <CurrentTime />
        </div>
      </div>
    );
  }
}
