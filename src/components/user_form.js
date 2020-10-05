import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Col, Row } from 'react-bootstrap';

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      email: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state === null) {
      this.setState(nextProps.currentUser)
    }
  }

  onChangeAttribute(event, attribute) {
    let newState = this.state
    if (newState['id'] === null) {
      newState['id'] = Date.now()
    }
    newState[attribute] = event.target.value
    this.setState(newState);
  }

  render() {
    const { currentUser, isAddUser } = this.props;
    if (!isAddUser) {return null;}

    return (
      <div className='mg-l-15'>
        <Form width="100%">
          <Form.Group as={Row}>
            <Col sm='12'>
              <Form.Control type='text' placeholder='Enter name' value={this.state.name}
                onChange={e => this.onChangeAttribute(e, 'name')}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm='12'>
              <Form.Control type='email' placeholder='Enter email' value={this.state.email}
                onChange={e => this.onChangeAttribute(e, 'email')}
              />
            </Col>
          </Form.Group>
          <Row>
            <Col sm='4'></Col>
            <Col sm='1' className='mg-r-15'>
              <Button variant='secondary' onClick={() => this.props.onSubmitForm(currentUser)}>Cancel</Button>
            </Col>
            <Col sm='1'>
              <Button variant='success' onClick={() => this.props.onSubmitForm(this.state)}>Save</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

UserForm.propTypes = {
  user: PropTypes.object,
  onChangeAttribute: PropTypes.func
};
