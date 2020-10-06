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
      currentUser: {
        id: null, name: '', email: ''
      },
      isAddUser: false
    }
  }

  componentDidUpdate(){
    localStorage.setItem('users', JSON.stringify(this.state.users));
  }

  editUser(user) {
    this.setState({
      currentUser: Object.assign(user, {isCanceled: false, isUpdated: false}),
      isAddUser: false
    })
  }

  deleteUser(currentUser) {
    let filterUsers = this.state.users.filter(user => user !== currentUser);
    this.setState({users: filterUsers})
  }

  onSubmitForm(currentUser) {
    let newUsers= this.state.users;
    let currentIndex = newUsers.findIndex(user => user.id === currentUser.id);

    if (currentIndex >= 0) {
      newUsers[currentIndex] = currentUser
      this.setState({
        users: newUsers,
        currentUser: currentUser,
        isAddUser: false
      })
    } else if (currentUser.isCanceled || currentUser.id === null) {
      this.setState({
        isAddUser: false
      })
    } else {
      this.setState({
        users: [...this.state.users, currentUser],
        currentUser: currentUser,
        isAddUser: false
      })
    }
  }

  addUserHandler() {
    this.setState({
      isAddUser: true,
      currentUser: {
        id: null, name: '', email: ''
      }
    })
  }

  renderTableListUser() {
    let { currentUser, isAddUser } = this.state;
    let eleUserForm;
    if (isAddUser || (currentUser.id !== null && !currentUser.isCanceled && !currentUser.isUpdated)) {
      eleUserForm = <UserForm onSubmitForm={this.onSubmitForm.bind(this)}
        currentUser={this.state.currentUser}
        isAddUser={this.state.isAddUser}
      />
    }
    return (
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
            <td width="50%">
              <UserData
                users={this.state.users}
                editUser={this.editUser.bind(this)}
                deleteUser={this.deleteUser.bind(this)}
                currentUser={this.state.currentUser}
                addUserHandler={this.addUserHandler.bind(this)}
                isAddUser={this.state.isAddUser}
              />
            </td>
            <td>
              {eleUserForm}
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderTableListUser()}
        <div className='text-center'>
          <Wave text="Khó vãi (╥_╥)" effect="stretch" effectChange={2.2} />
          <CurrentTime />
        </div>
      </div>
    );
  }
}
