import React from 'react';
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import Message from '../components/Message'


const Product = ({product}) => {
  return (
     <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        

        <Card.Text as='h3'>${product.price}</Card.Text>


          {product.reviews.length === 0 && <Message>No Reviews</Message>}
        
         
             {product.reviews.map((review) => (
               <Card.Title as='h3' key={review._id}>  <Rating value={review.rating} /></Card.Title>
                   
                  
                  
                ))}
            
      
            


      </Card.Body>
    </Card>
  );
}

export default Product;
