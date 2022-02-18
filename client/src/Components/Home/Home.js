import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

//import css
import './Home.css'

//importing cart context
import {CartContext} from '../../Context/MainContext.js'

//import home data
import homeData from '../../Data/homeData.jsx'

const Home = () => {
    const {addToCart, buyItem} = useContext(CartContext);

	return (
		<div className="home-wrapper">
            <div className="left-column">
           		<div className='watch-description'>
           			<h1>{homeData.name} - We Value The Time</h1>
           			<p>{homeData.description}</p>
           		</div>	           	

           		<div className='pricing'>$ {homeData.price}</div>

            	<div className='home-buttons'>
                    <Link to="/cart" onClick={() => buyItem(homeData.id, homeData.image, homeData.name, homeData.price, homeData.quantity)}>Buy Now</Link>                
            		<Link to="#" onClick = {() => addToCart(homeData.id, homeData.image, homeData.name, homeData.price, homeData.quantity)}>Add To Cart</Link>
            	</div>
            </div>
            <div className="right-column">
                <img src={homeData.image} alt={homeData.image} />
            </div>
        </div>
	)
}

export default Home