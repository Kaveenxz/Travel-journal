import '../index.css'
import logo from '/logo.svg'

function Header() {
  return (
    <nav className='navbar'>
        <img src={logo} alt="logo" />
        <h4>my travel journal</h4>
    </nav>
  )
}

export default Header