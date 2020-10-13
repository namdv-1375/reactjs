import React, { Component } from 'react';
import WrapperDetail from '../shared/wrapper_detail';

export default class UserDetail extends Component {
  constructor() {
    super();
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

  renderActionButton(id) {
    let { isAdded, isEdited, isCanceled } = this.props;
    if (!isCanceled && (isAdded || isEdited)) {return null;}

    if (this.state.isHover) {
      return <div>
        <span onClick={() => this.props.editUserHandler(id)}>
          <i className='fa fa-edit mg-r-10 custom-icon-action'></i>
        </span>
        <span onClick={() => this.props.deleteUserHandler(id)}>
          <i className='fa fa-trash custom-icon-action'></i>
        </span>
      </div>
    }
  }

  render() {
    let { user, index } = this.props;
    return(
      <tr key={`user-${index}`}
        onMouseEnter={() => this.onMouseEnterHandler(user.id)}
        onMouseLeave={() => this.onMouseLeaveHandler(user.id)}>
        <WrapperDetail>
          <td className='text-left' width='20%'>{user.name}</td>
          <td className='text-left' width='20%'>{user.email}</td>
          <td className='text-center' width='10%'>{this.renderActionButton(user.id)}</td>
        </WrapperDetail>
      </tr>
    )
  }
}