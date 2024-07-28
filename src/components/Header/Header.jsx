import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { LogoutBtn, Container, Logo } from '../index'

const Header = () => {
  const navigate = useNavigate();
  const authStatus = useSelector(state => state.auth.status);

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    }, 
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    }, 
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    }, 
  ]

  return (
    <header className='py-3 shadow bg-gray'>
      <Container>
        <nav className='d-flex'>
          <div className="mr-4">
            <Link>
              <Logo width='50px'/>
            </Link>
            <ul className='d-flex ml-auto'>
              {navItems.map((item)=>(
                item.active ? (
                  <li key={item.name}>
                    <button 
                      onClick={()=> navigate(item.slug)}
                    >{item.name}</button>
                  </li>
                ) : null
              ))}
              {authStatus && (
                <li>
                  <LogoutBtn/>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header