import React, { Component } from 'react';
import UserData from './user_data';
import UserForm from './user_form'
import CurrentTime from '../shared/current_time'

export default class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: JSON.parse(localStorage.getItem('users')) || [],
      currentUser: null,
      isAddUser: false
    }
  }

  componentDidUpdate(){
    localStorage.setItem('users', JSON.stringify(this.state.users));
  }

  onChangeAttribute(event, attribute) {
    let newState = this.state
    newState.currentUser[attribute] = event.target.value
    this.setState(newState);
  }

  changeCurrentUser(user) {
    let newState = this.state
    newState.currentUser = user
    this.setState(newState)
  }

  onSubmitForm(currentUser) {
    let newState = this.state
    let currentIndex = newState.users.findIndex(user => user.id === currentUser.id)

    if (currentIndex >= 0) {
      newState.users[currentIndex] = currentUser
      this.setState(newState)
    } else {
      this.setState({
        users: [...this.state.users, currentUser]
      })
    }
  }

  addUserHandler() {
    this.setState({
      isAddUser: true
    })
  }

  renderTableListUser() {
    return (
      <div>
        <table className='table table-bordered'>
        <thead>
          <tr>
            <td className='text-left'><h3>{'Exercise 2'}</h3></td>
            <td className='text-right'>
              <CurrentTime />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="50%">
              <UserData
                users={this.state.users}
                changeCurrentUser={this.changeCurrentUser.bind(this)}
                currentUser={this.state.currentUser}
                addUserHandler={this.addUserHandler.bind(this)}
              />
            </td>
            <td>
              <UserForm onChangeAttribute={this.onChangeAttribute.bind(this)}
                onSubmitForm={this.onSubmitForm.bind(this)}
                currentUser={this.state.currentUser}
                isAddUser={this.state.isAddUser}
              />
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
      </div>
    );
  }
}
