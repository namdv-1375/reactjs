import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Col, Row } from 'react-bootstrap';

export default class UserForm extends Component {
  initState(user) {
    this.setState({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  }

  componentWillMount() {
    this.initState(this.props.currentUser);
  }

  onChangeAttribute(event, attribute) {
    let { currentUser, isAddUser } = this.props;
    let newState = isAddUser ? currentUser : this.state

    if (newState['id'] === null) {
      newState['id'] = Date.now()
    }
    newState[attribute] = event.target.value
    this.setState(newState);
  }

  onSubmitFormHandler(user, action) {
    if (action === 'cancel') {
      this.setState(Object.assign(user, {isCanceled: true, isUpdated: false}))
    } else {
      this.setState(Object.assign(user, {isCanceled: false, isUpdated: true}))
    }
    this.props.onSubmitForm(user)
  }

  render() {
    let { currentUser, isAddUser } = this.props;
    if (currentUser.isCanceled || currentUser.isUpdated) {return null;}

    return (
      <div className='mg-l-15'>
        <Form width="100%">
          <Form.Group as={Row}>
            <Col sm='12'>
              <Form.Control type='text' placeholder='Enter name' value={isAddUser ? currentUser.name : this.state.name}
                onChange={e => this.onChangeAttribute(e, 'name')}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm='12'>
              <Form.Control type='email' placeholder='Enter email' value={isAddUser ? currentUser.email : this.state.email}
                onChange={e => this.onChangeAttribute(e, 'email')}
              />
            </Col>
          </Form.Group>
          <Row>
            <Col sm='4'></Col>
            <Col sm='1' className='mg-r-15'>
              <Button variant='secondary' onClick={() => this.onSubmitFormHandler(currentUser, 'cancel')}>Cancel</Button>
            </Col>
            <Col sm='1'>
              <Button variant='success' onClick={() => this.onSubmitFormHandler(this.state, 'update')}>Save</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

UserForm.propTypes = {
  user: PropTypes.object
};
