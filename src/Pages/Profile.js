import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { Card , Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

const Profile = () => {
  const {id}=useParams()
  const [user, setUser] = useState({})
  useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
    .then((res) => setUser(res.data[0]))
    .catch((err) => console.log(err))

 
  })
  
  return (
    <div>
        <h2>Profile User</h2>
        <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" />
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>{user.username}</Card.Text>
    <Card.Text>{user.email}</Card.Text>
    <Button variant="primary">
      <Link to ={`/users`}>Go back</Link>
      </Button>
  </Card.Body>
</Card>
        
    </div>
    </div>
  )
}

export default Profile