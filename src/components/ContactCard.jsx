import star from '../assets/star.png'
import trophy from '../assets/trophy.png'

function ContactCard(props) {
    const { card } = props;
    return (
        <tr>
            <td><img className="image" src={card.pictureUrl} alt="" /></td>
            <td>{card.name}</td>
            <td>{card.popularity.toFixed(2)}</td>
            <td>{card.wonOscar ? <img className='emoji' src={trophy} alt="" /> : ""}</td>
            <td>{card.wonEmmy ? <img className='emoji' src={star} alt="" /> : ""}</td>
        </tr>
    )
}

export default ContactCard