import React from 'react'
import {Card, Button} from 'react-bootstrap'

interface storeProps {
    id: number, 
    name: string, 
    price: number,  
    imgUrl: string
}

let quantity = 1

function StoreItem({id, name, price ,imgUrl}: storeProps) {
  return (
    <Card>
 <Card.Img  src={imgUrl} height="200px"  style={{ marginTop: 12, objectFit: "contain"}}/> 
 <Card.Body style={{display: 'flex', justifyContent: "space-between"}}>
    <Card.Title>{name}</Card.Title>
<Card.Title>{price}</Card.Title> 
 </Card.Body> 

 <div style={{display: "flex", justifyContent: "center"}}>
{
    quantity === 0 ? (
    <Button className="w-100">add to cart</Button> 
    ): (
        <div> 
        <div> 
        <Button style={{marginRight: 12}}>-</Button> 
          <span>{quantity}</span> 
          <Button style={{marginLeft: 12}}>+</Button> 
        </div>
        
        <Button  style={{marginTop: 5, marginLeft: 9}} variant="danger"> Remove</Button>
        </div>

    )
}
 </div>
    </Card>
  )
}

export default StoreItem