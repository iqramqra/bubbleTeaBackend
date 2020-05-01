import React from 'react';
import { NavLink} from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Home = () => {

  return (
    <div className="homepage">
      <Button.Group>
        <NavLink to="/login">
          <Button color="olive">
            Login
          </Button>
        </NavLink>
        <Button.Or />
        <NavLink to="/register">
          <Button color="olive">
            Register
          </Button>
        </NavLink> 
      </Button.Group>
    </div>
  )
  
}

export default Home;