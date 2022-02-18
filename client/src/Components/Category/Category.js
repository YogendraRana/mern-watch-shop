import React from 'react'

//importing components
import Card from '../Card/Card'

//importing Category.css
import './Category.css'

const Category = (props) => {
	const {name, data, length, prev, next, count, show} = props;

	return(
		<div className="category-wrapper">
			<div className="head">
				<div className="category-title">
					<h3>{name}</h3>
				</div>

				<div className="arrows">
					<div className={count === 0 ? "arrow-left not-active" : "arrow-left"} onClick={prev}>
						<i className="fa fa-arrow-left" aria-hidden="true"></i>
					</div>
					<div className={length - count === show ? "arrow-right not-active" : "arrow-right"} onClick={next}>
						<i className="fa fa-arrow-right" aria-hidden="true"></i>
					</div>
				</div>
			</div>

			<div className="category-slider">
			{
				data.map((info, index) => (
						<Card key={index} {...info} count={count} show={show} />
				))
			}
			</div>
		</div>
	)
}

export default Category