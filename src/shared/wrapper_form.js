import { Component } from 'react';

export default class WrapperForm extends Component {
  constructor() {
    super();
    this.state = { currentValues: {}, errors: {} }
    this.onChange = this.onChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentWillMount() {
    this.setState({
      currentValues: this.newCurrentValues(this.props.newUser)
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentValues: this.newCurrentValues(nextProps.newUser)
    })
  }

  newCurrentValues(user) {
    return Object.assign(
      this.state.currentValues, {id: user.id, name: user.name, email: user.email}
    );
  }

  validate(field) {
    const errorMessage = this.state.currentValues[field] ? null : field + ' is blank!'

    this.setState({ errors: {
      ...this.state.errors,
      [field]: errorMessage
    }})
  }

  fieldsEmpty() {
    let newUser = this.state.currentValues;
    let fieldsEmpty = [];
    Object.keys(newUser).map(key => {
      if(newUser[key] === '') {
        fieldsEmpty.push(key)
      }
    });

    return fieldsEmpty;
  }

  validateFields() {
    let newErrors = this.state.errors;
    this.fieldsEmpty().map(field => {
      newErrors[field] = field + ' is blank!'
    })

    this.setState({errors: newErrors})
  }

  onChange(e) {
    let newState = this.state;
    let { name, value } = e.target;

    if (newState.currentValues['id'] === null) {
      newState.currentValues['id'] = Date.now()
      newState.currentValues['created_at'] = Date.now()
    }

    this.setState({currentValues: {
      ...newState.currentValues,
      [name]: value
    } },() => this.validate(name))
  }

  onSubmitForm(e) {
    let { name } = e.target;
    let user = name === 'cancel' ? this.props.oldUser : this.state.currentValues;
    if (this.fieldsEmpty().length > 0 && name !== 'cancel') {
      this.validateFields();
    } else {
      this.props.handleSubmit(user, name);
    }
  }

  render() {
    let disabled = Object.values(this.state.errors).filter(Boolean).length > 0 ? true : false

    return this.props.children({
      currentValues: this.state.currentValues,
      errors: this.state.errors,
      onChange: this.onChange,
      disabled: disabled,
      onSubmitForm: this.onSubmitForm
    })
  }
}