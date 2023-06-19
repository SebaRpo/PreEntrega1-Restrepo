import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ name, img, price, category, description, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
    }

    return (
        <Card style={{ width: '18rem' }}>
            
            <Card.Img variant="top" src={img} alt={name} style={{ width: 100}} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>category: {category}</Card.Text>
                <p>${price}</p>
                <p>Description: {description}</p>
                {
                    quantity == 0 
                        ? ( stock > 0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/> : <p>No hay stock del producto</p>)
                        : <Button variant="primary">finalizar compra</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default ItemDetail