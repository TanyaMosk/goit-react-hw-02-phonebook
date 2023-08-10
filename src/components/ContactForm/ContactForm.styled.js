import styled from 'styled-components'
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
background-color: white; 
  margin: auto;
  padding: 20px;
  width: 300px; 
  border-radius: 10px;
   box-shadow:
       inset 0 -3em 3em rgba(0,0,128,0.3),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);


display: flex;
flex-direction: column;
gap: 10px;
`;

export const StyledLabel = styled.label`
display:grid;
gap:10px;
`;


export const StyledField = styled(Field)`
border-radius: 5px;
padding: 5px 10px;

&:hover{
    border: 2px solid darkblue;
}
`;


export const Button = styled.button`
margin-right: auto;
border-radius: 5px;
padding: 4px  8px;

&:hover{
    background-color: darkblue;
    color: white;
}
/* margin-left: 20px; */
`;
