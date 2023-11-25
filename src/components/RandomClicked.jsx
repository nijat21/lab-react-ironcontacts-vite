import { useState } from 'react';
import Headers from './Headers';
import prodContacts from '../contacts.json'
import ContactList from "./ContactList"

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function RandomClicked() {
    const [contacts, setContacts] = useState(prodContacts.slice(0, 5));

    const addRandomContact = () => {
        let nIndex = getRandomArbitrary(5, prodContacts.length);
        const random = prodContacts.slice(nIndex, nIndex + 1);

        const updatedContacts = [...contacts, random];
        setContacts(updatedContacts);
    }

    return (
        <>
            <h1>IronContacts</h1>
            <button onClick={() => { addRandomContact() }} >Add Random Contact</button>
            < table >
                <Headers />
                <tbody>
                    <ContactList contacts={contacts} />
                </tbody>
            </table>
        </>
    )
}

// export default RandomClicked