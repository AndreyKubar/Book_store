import React from 'react';
import { useParams } from 'react-router-dom';

function UserCart() {
  let {id} = useParams();
  return (
  <div>Cart {id}</div>
  );
}

export default UserCart;