import { React, useRef, useEffect, useContext } from 'react';
import logo from './../../assets/Logo.png'
import Home from '../../pages/Home';
import profileIcon from '../../assets/user.png'
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { AuthContext } from '../../context/AuthContext';

const navLink = [
  {
    path: '/home',
    display: 'Início'
  },
  {
    path: '/doctor',
    display: 'Encontre um médico'
  },
  {
    path: '/Services',
    display: 'Serviços'
  },
  {
    path: '/contact',
    display: 'Contato'
  },
]


const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const { user, role, token } = useContext(AuthContext)

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header')
      } else {
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }
  useEffect(() => {
    handleStickyHeader()
    return () => window.removeEventListener('scroll', handleStickyHeader)
  })
  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')
  return (
    <header className='header  flex items-center' ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>

          {/* LOGO */}
          <div className='logo'>
            <img src={logo} className='w-full' />
          </div>

          {/* MENU */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {
                navLink.map((link, index) => <li key={index}>
                  <NavLink to={link.path} className={navClass => navClass.isActive ?
                    'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500]'}>
                    {link.display}
                  </NavLink>
                </li>)
              }
            </ul>
          </div>

          { /* NAV RIGHT */}
       

          {/* NAV RIGHT */}
          <div className='flex items-center gap-4'>
            {
              token && user ?
                <div>
                  <Link to={`${role === 'doctor' ? '/doctors/perfil/eu' : '/users/perfil/eu'}`}>
                {user.photo? (    <figure className='w-[69px] h-[69px] rounded-full cursor-pointer flex' >
                      <img src={user?.photo } alt='' className='w-full rounded-full' />
                    </figure> ): (
                      <figure className='w-[69px] h-[69px] d-flex rounded-full cursor-pointer flex'>
                      <img src={profileIcon} alt='' className='w-full rounded-full' />
                    </figure>
                    )

                    }
                  </Link>
                </div> :
                <Link to="/login">
                  <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
                </Link>
            }



          <span className='md:hidden' onClick={toggleMenu}>
            <BiMenu className='w-6 h-6 cursor-pointer' />
          </span>
        </div>
      </div>
    </div>
    </header >
  )
}

export default Header;
