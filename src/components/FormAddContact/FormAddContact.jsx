import { React, Component } from 'react';
import FormInput from 'components/FormInput';
import { Form, AddContactBtn } from './FormAddContact.styled';

const options = {
  name: {
    type: 'text',
    name: 'name',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  },
  number: {
    type: 'tel',
    name: 'number',
    pattern: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
    title:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  },
};

class FormAddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  onImputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.onAddFormSubmit(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number, onAddFormSubmit } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <FormInput
          value={name}
          type={'text'}
          name={'name'}
          label={'name: '}
          onChange={this.onImputChange}
          pattern={options.name.pattern}
          title={options.name.title}
        />
        <FormInput
          value={number}
          type={'tel'}
          name={'number'}
          label={'number: '}
          onChange={this.onImputChange}
          pattern={options.number.pattern}
          title={options.number.title}
        />
        <AddContactBtn type="submit">Add contanct</AddContactBtn>
      </Form>
    );
  }
}

export default FormAddContact;
