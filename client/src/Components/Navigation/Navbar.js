import React, {useState, useContext} from 'react'
import {NavLink, Link} from 'react-router-dom'

//import context
import {CartContext} from '../../Context/MainContext.js'

//import Navbar.css and index.css
import './Navbar.css'

const activeStyle = {
	background: "var(--dark-light)",
}

const Navbar = () => {
	const {totalQuantity} = useContext(CartContext);
	const [menu, setMenu] = useState(false);
	const [search, setSearch] = useState('');

	return (
		<>
			<nav className="navbar"> 
				<NavLink to=''>
					<div className="logo">Times</div>
				</NavLink>

				<ul className={menu ? "menu" : ""}>
					<li className="nav-item">
						<NavLink exact to='/' activeStyle={activeStyle}>Home</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact to='/about' activeStyle={activeStyle}>About</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact to='/contact' activeStyle={activeStyle}>Contact</NavLink>
					</li>
				</ul>

				<div className="nav-icons">
					<div className="search-box">
						<input type="text" placeholder="Search the product..." value={search} onChange = {(e) => setSearch(e.target.value)} />	
						<div className="search-icon">
							<i className="fas fa-search"></i>
						</div>
					</div>

					<Link to='cart' className="cart-link">
						<i className="fas fa-shopping-cart"></i>
						<div className="nav-total-quantity">{totalQuantity}</div>
					</Link>

					<Link to='profile' className="profile-link">
						<i className="fas fa-user"></i>
					</Link>

					<Link to='register' className="register-link">
						Register
					</Link>

					<div className="hamburger" onClick={() => setMenu(!menu)}>
						<i className={menu ? "fas fa-times":"fas fa-bars"}></i>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
