import { Formik, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid'
import * as Yup from 'yup';
import { Button, StyledForm } from './ContactForm.styled';



const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(20, 'Too Long!')
     .trim()
     .required('Required'),
   number: Yup.string()
     .min(2, 'Too Short!') 
     .max(20, 'Too Long!')  
     .required('Required'),   
 });

export const ContactForm = ({onAdd}) => {
    return (
        <Formik
        initialValues={{
          name: '',
          number: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values,actions) => {
                onAdd({...values, id: nanoid()});
                actions.resetForm();
            }}    
      >
      <StyledForm>
        <label>Name
        <Field type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required />
       <ErrorMessage name="name"/>
        </label>        

        <label>Number
        <Field
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required/>
        <ErrorMessage name="number"/>
        </label>
                  
        <Button type="submit">Add contact</Button>
      </StyledForm>
        </Formik>
    )
}