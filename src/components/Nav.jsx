import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <Link to='/'>
        <div>Main Page</div>
      </Link>
      <Link to='/Breeds'>
        <div>Cat Breeds</div>
      </Link>
    </div>
  )
}

export default Nav