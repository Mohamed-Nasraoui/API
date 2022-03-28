import React from 'react'
import { Card , Button  } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" />
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>{user.username}</Card.Text>
    <Card.Text>{user.email}</Card.Text>
    <Button variant="primary">
      <Link to ={`/user/${user.id}`}>Go to profile</Link>
      </Button>
  </Card.Body>
</Card>
        
    </div>
  )
}

export default UserCard