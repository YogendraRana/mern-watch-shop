import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';

//importing css file
import './Store.css'

//importing cart context
import {CartContext} from '../../Context/MainContext.js'

//importing store data
import ProductData from '../../Data/data.jsx'

const Store = () => {
	const [tag, setTag] = useState('all');
	const [filteredStore, setFilteredStore] = useState(ProductData);
	const {buyItem} = useContext(CartContext);	

	useEffect(() => {
		tag === 'all' ? setFilteredStore(ProductData) : setFilteredStore(ProductData.filter(data => data.tag === tag))
	}, [tag]);

	return(
		<div className="store-wrapper">
			<div className="store-head">
				<h3>Main Store</h3>
				<div className="store-filter">
					<div className={tag === 'all' ? "store-filter-btn active": "store-filter-btn"} onClick = {() => setTag('all')}>All</div>
					<div className={tag === 'men' ? "store-filter-btn active": "store-filter-btn"} onClick = {() => setTag('men')}>Men</div>
					<div className={tag === 'women' ? "store-filter-btn active": "store-filter-btn"} onClick = {() => setTag('women')}>Women</div>
					<div className={tag === 'kids' ? "store-filter-btn active": "store-filter-btn"} onClick = {() => setTag('kids')}>Kids</div>
				</div>
			</div>
			
			<div className="all-store-items">
				{
					filteredStore.map(data => 						
						<div className="store-item" key={data.id}>
							<div className="store-item-img">
								<img src={data.image} alt={data.image} />
							</div>

							<div className="store-item-info">
								<div>
									<p>{data.name}</p>
									<span>$ {data.price}</span>
								</div>
								<Link to="/cart">
									<button className="store-cart-btn" onClick={() => buyItem(data.id, data.image, data.name, data.price, data.quantity)}>Buy Now</button>
								</Link>
		               		</div>
		               		<Link to={`/${data.id}`}>
								<i className="fa fa-expand-alt"></i>
							</Link>
						</div>				
					)
				}
			</div>
		</div>
	);
}

export default Store