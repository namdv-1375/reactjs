import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Col, Row } from 'react-bootstrap';
import WrapperForm from '../shared/wrapper_form';

export default class UserForm extends Component {
  initState(user) {
    this.setState({
      id: user.id || null,
      name: user.name || '',
      email: user.email || ''
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAdded) {
      this.initState({});
    }
  }

  componentWillMount() {
    this.initState(this.focusUser());
  }

  focusUser() {
    let { users, focusUserId } = this.props;
    return users.find(u => (u.id === focusUserId)) || {};
  }

  render() {
    return (
      <div className='mg-l-15'>
        <WrapperForm newUser={this.state} oldUser={this.focusUser()} handleSubmit={this.props.onSubmitForm.bind(this)}>
          {({ currentValues, errors, onChange, disabled, onSubmitForm }) => (
            <Form width="100%">
              <Form.Group as={Row}>
                <Col sm='12'>
                  <Form.Control type='text' placeholder='Enter name' value={currentValues.name}
                    onChange={onChange} name='name'
                  />
                  <div className='error-messages'>{errors.name}</div>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm='12'>
                  <Form.Control type='email' placeholder='Enter email' value={currentValues.email}
                    onChange={onChange} name='email'
                  />
                  <div className='error-messages'>{errors.email}</div>
                </Col>
              </Form.Group>
              <Row>
                <Col sm='4'></Col>
                <Col sm='1' className='mg-r-15'>
                  <Button variant='secondary' onClick={onSubmitForm} name={'cancel'}>Cancel</Button>
                </Col>
                <Col sm='1'>
                  <Button variant='success' disabled={disabled} onClick={onSubmitForm} name={'update'}>Save</Button>
                </Col>
              </Row>
            </Form>
          )}
        </WrapperForm>
      </div>
    );
  }
}

UserForm.propTypes = {
  user: PropTypes.object
};
