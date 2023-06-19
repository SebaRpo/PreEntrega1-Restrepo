import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';

const Item = ({ id, name, img, price }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Img variant="top" src={img} alt={name} style={{ width: 100}} />
            <p>${price}</p>
            <Link to={`/item/${id}`}>ver detalle</Link>
            </Card.Body>
        </Card>
    )
}

export default Item