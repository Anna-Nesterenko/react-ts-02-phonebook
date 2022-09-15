import { ContactContainer, ContactEl, ContactBtn } from "./Contacts.styled";
import { contactsType } from "../../App";

interface AppProps {
  contacts: contactsType[];
  onDeleteContact: any;
}

export const Contacts = ({ contacts, onDeleteContact }: AppProps) => {
  return (
    <ContactContainer>
      {contacts.map(({ id, name, number }: contactsType) => (
        <ContactEl key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <ContactBtn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </ContactBtn>
        </ContactEl>
      ))}
    </ContactContainer>
  );
};
