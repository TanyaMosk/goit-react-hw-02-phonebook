import { DeleteBtn, List, ListItem } from "./ContactList.styled"

export const ContactList = ({contacts, onDelete}) => {
  return (     
         <List>
          {contacts.map(({id,name,number}) => (
            <ListItem key={id}>{name}: {number}
            <DeleteBtn onClick={() => onDelete(id)}>Delete</DeleteBtn>
            </ListItem>
          ))} 
      </List>    
    )
}
