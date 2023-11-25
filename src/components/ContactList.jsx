import ContactCard from './ContactCard';


function ContactList(props) {
    const { contacts } = props;
    // Copying contacts into prodContacts
    // const [contacts, setContacts] = useState(prodContacts.slice(0, 5));
    return (
        contacts.map((contact) => {
            return <ContactCard key={contact.id} card={contact} />;
        })
    )
}

export default ContactList