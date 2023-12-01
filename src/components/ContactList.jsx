import { useState } from 'react';
import Headers from './Headers.jsx';
import data from '../contacts.json';
import ContactCard from './ContactCard.jsx';

function ContactList() {
    // const contacts = prodContacts.slice(0, 5);
    const contactsLeft = data.slice(5);
    const [contactsShown, setContactsShown] = useState(data.slice(0, 5));

    // Add random contact
    const addRandomContact = () => {
        let nIndex = Math.floor(Math.random() * (contactsLeft.length - 5) + 5);
        const result = [...contactsShown, contactsLeft[nIndex]];
        setContactsShown(result);
    }

    // Sort by popularity
    const sortByPop = () => {
        const copy = [...contactsShown];
        const sorted = copy.sort((a, b) => b.popularity - a.popularity);
        setContactsShown(sorted);
    }

    // Sort by name
    const sortByName = () => {
        const copy = [...contactsShown];
        const sorted = copy.sort((a, b) => a.name.localeCompare(b.name));
        setContactsShown(sorted);
    }

    // Delete a contact
    const deleteContact = (id) => {
        const copy = contactsShown.filter((contact) => contact.id != id);
        setContactsShown(copy);
    }


    return (
        <>
            <h1>IronContacts</h1>
            <div>
                <button onClick={() => { addRandomContact() }}>Add Random Contact</button>
                <button onClick={() => { sortByPop() }}>Sort by popularity</button>
                <button onClick={() => { sortByName() }}>Sort by name</button>
            </div>
            <table>
                <Headers />
                <tbody>
                    {contactsShown.map((contact) => {
                        return <ContactCard key={contact.id} contact={contact} deleteContact={deleteContact} />;
                    })}
                </tbody>
            </table>
        </>
    )

}

export default ContactList