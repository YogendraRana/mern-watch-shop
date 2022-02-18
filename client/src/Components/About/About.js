import React from 'react';
import { Link } from 'react-router-dom'

//importing css
import './About.css';

//importing pics
import t2 from "../../Images/t2.png"

const About = () => {
	return (
	<section className="about-section">
		<div className="left-column">
			<div className="about-paragraph">
				<h3>Our Story</h3>
            	<p>
            		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. 
            		Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. 
            		Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            		Maecenas varius egestas diam, eu sodales metus scelerisque congue.          		
            	</p>

            	<h3>Our Goals</h3>
            	<p>
            		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. 
            		Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. 
            		Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            	</p>

            	<p>
            		Any questions? Let us know in store at 8 th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
            	</p>
			</div>

			<Link to="/contact">
				<div className="contact-link">Contact</div>
			</Link>			
		</div>

		<div className="right-column">
			<img src={t2} alt={t2} />
		</div>
	</section>
	);
}

export default About;
