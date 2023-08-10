

export const Filter = ({ filter, onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter} 
        onChange={evt => onChange(evt.target.value)} 
      />
    </>
  );
};