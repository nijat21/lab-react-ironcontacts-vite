import star from '../assets/star.png'
import trophy from '../assets/trophy.png'

function ContactCard(props) {
    const { name, pictureUrl, popularity, id, wonOscar, wonEmmy } = props.contact;
    const { deleteContact } = props;

    return (
        <tr key={id}>
            <td><img className="image" src={pictureUrl} alt="" /></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td>{wonOscar ? <img className='emoji' src={trophy} alt="" /> : ""}</td>
            <td>{wonEmmy ? <img className='emoji' src={star} alt="" /> : ""}</td>
            <td><button onClick={() => deleteContact(id)}>Delete</button></td>
        </tr>
    )
}

export default ContactCard