import { InputStyled } from "./Filter.styled";


export const Filter = ({ filter, onChange }) => {
  return (
    <>      
      <p>Find contacts by name</p>
      <InputStyled
        type="text"
        value={filter} 
        onChange={evt => onChange(evt.target.value)} 
      />
    </>
  );
};
