import React from 'react'
import storeItem from  '../data/item.json' 
import {Row, Col} from 'react-bootstrap' 
import StoreItem from '../components/StoreItem'

function Store() {
  return (
    <div>
      <h1>Store</h1> 
      <Row md={2} xs={1} lg={1} className="g-3">
        {
          storeItem.map((item) => {
            return (
              <Col key={item.id}><StoreItem {...item}/></Col>
            )
          })
        }
      </Row>
    </div>
  )
}

export default Store