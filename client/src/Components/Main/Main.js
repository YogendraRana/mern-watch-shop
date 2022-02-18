import React, {useState, useEffect} from 'react'

//importing components
import Category from '../Category/Category'
import Store from '../Store/Store'
import Subscribe from '../Subscribe/Subscribe'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'

//importing Home.css
import './Main.css'

//importing data
import ProductData from '../../Data/data'
const newData=ProductData.filter(data=>data.category==="new_arrivals");
const hotData=ProductData.filter(data=>data.category==="hot_selling");
const featuredData=ProductData.filter(data=>data.category==="featured_products");

const Main = () => {
	const [current, setCurrent] = useState(0);
	const [_current, _setCurrent] = useState(0);
	const [__current, __setCurrent] = useState(0);
	const [show, setShow] = useState(4);

	const useWindowSize = () => {
		const [size, setSize] = useState({
			height: window.innerHeight, 
			width: window.innerWidth
		})

		useEffect(() => {
			const handleResize = () => {
				setSize({
					height: window.innerHeight, 
					width: window.innerWidth
				})
			}

			window.addEventListener("resize", handleResize);

			if(size.width <= 480){
				setShow(1)
			}
			else if(size.width <= 768){
				setShow(2)
			}
			else if(size.width <= 1024){
				setShow(3)
			}
			else{
				setShow(4)
			}

			return () => window.removeEventListener("resize", handleResize);

		})

		return size;
	}	

	useWindowSize();

	//functions for newData
	const prev = () => {
		current === 0 ? setCurrent(0) : setCurrent(prevState => prevState - 1);		
	}

	const next = () => {
		current === (newData.length-show) ? setCurrent(newData.length-show) : setCurrent(prevState => prevState + 1);
	}


	//functions for hotData
	const _prev = () => {
		_current === 0 ? _setCurrent(0) : _setCurrent(prevState => prevState - 1);		
	}

	const _next = () => {
		_current === (hotData.length-show) ? _setCurrent(hotData.length-show) : _setCurrent(prevState => prevState + 1);
	}


	//functions for hotData
	const __prev = () => {
		__current === 0 ? __setCurrent(0) : __setCurrent(prevState => prevState - 1);		
	}

	const __next = () => {
		__current === (featuredData.length-show) ? __setCurrent(featuredData.length-show) : __setCurrent(prevState => prevState + 1);
	}

    return (
    	<>  
	    	<section className="home">
	    		<Home />
	    	</section>

	        <section className="categories">
	        	<Category name="New Arrivals" data={newData} length={newData.length} prev={prev} next={next} count={current} show={show} />
	        	<Category name="Hot Selling" data={hotData} length={hotData.length}  prev={_prev} next={_next} count={_current} show={show}  />
	        	<Category name="Featured Products" data={featuredData} length={featuredData.length}  prev={__prev} next={__next} count={__current} show={show}  />
	        </section>

	        <section className="subscribe">
	        	<Subscribe />
	        </section>

	        <section className="store">
	        	<Store />
	        </section>

	        <section className="footer">
	       		<Footer />
	       	</section>
	    </>           
    )
}

export default Main
