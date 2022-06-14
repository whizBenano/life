import { Link } from 'react-router-dom'
const React = require('react')

const Nav = () => {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '.5rem .2rem',
  }

  const beautify = () => {
    const kiks = document.querySelectorAll('.kik')
    const go = document.querySelector('.nav-links')
    const control = document.querySelector('.control')
    
    kiks.forEach(kik => {
      kik.addEventListener('click', () => {
        go.classList.remove('open')
        if(control.classList.contains('close'))
          control.classList.remove('close')
      })
    })
    
  }
  
  const flip = () => {
    const control = document.querySelector('.control')
    const open = document.querySelector('.nav-links')

    open.classList.toggle('open')
    control.classList.toggle('close')
  }

  return (
    <nav>
      <div className='control'>
        <h3>
          <Link to='/' className='h3' style={navStyle}>Life<span>.</span></Link>
        </h3>
        <div className='swap' onClick={flip}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className='nav-links' onFocus={beautify}>
          <p className='kik'>
            <Link style={navStyle} to='/people'>People</Link>
          </p>
          <p className='kik'>
            <Link style={navStyle} to='/places'>Places</Link>
          </p>
          <p className='kik'>
            <Link style={navStyle} to='/consultants'>Consultants</Link>
          </p>
          <p className='kik'>
            <Link style={navStyle} to='/testimonials'>Testimonials</Link>
          </p>
          <p className='kik'>
            <Link style={navStyle} to='/contact'>Contact</Link>
          </p>
        </div>
      </div>
    </nav>
  )
}

const Footer = () => {
  const footLink = {
    color: '#ff0157',
    textDecoration: 'none'
  }

  const fine = {
    background: '#ccc',
    width: '100%',
    textAlign: 'center',
    padding: '.4rem',
    marginBottom: '-5px',
  }

  return <p className='foot' style={fine}>
    Copyright 2021 <Link style={footLink} to='/'>Ben Spencer</Link>. All rights Reserved
  </p>
}

export default Nav
export { Footer }