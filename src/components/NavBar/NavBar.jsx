import './NavBar.css';
import { useRef } from 'react'; // useRef es para manejar los elementos del DOM
import {FaBars, FaTimes} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CartWidget from '../CartWidget/CartWidget';

const NavBar  = () => {
    const navRef = useRef();
    const toggleNav = () => {
        navRef.current.classList.toggle('active');
    }
    
    const closeNav = () => {
        navRef.current.classList.remove('active');
    }
    return (
        // menú de navegación
        <header>
            
           <h3>ReALTA</h3>
            <nav ref={navRef}>
                
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Vestidos de Baño</a></li>
                    <li><a href="">Bodies</a></li>
                    <li><a href="">Accesorios</a></li>
                    <CartWidget/>
                </ul>
                
                <button onClick={closeNav} className="close-btn navBtn">
                    <FaTimes/>
                </button>
            </nav>
            <button onClick={toggleNav} className="navBtn">
                <FaBars/>
       
            </button>
        </header>
    )
}

export default NavBar;