import './App.css';
import logo from './logo.svg';
function Header(props) {
  return (
    <nav className="navbar">
      <img 
        src={logo}
         style={{
            width: 100,   
            height: 50,
            }} 
            alt='logo'
/>
      <h1>{props.page} </h1>
      <ul className="linklist">
        <li><a href="/">Home</a></li> 
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>

  )
}
export default Header;