import React from 'react'

//import css
import './SocialModal.css'

const SocialModal = ({showSocialModal, setShowSocialModal}) => {
	if(showSocialModal)
	return (
		<div className="modal-container">
			<div className="modal-wrapper">
				<div className="icon facebook">
					<p>Facebook</p>
					<span><i className="fab fa-facebook-f"></i></span>
				</div>
				<div className="icon instagram">
					<p>Instagram</p>
					<span><i className="fab fa-instagram"></i></span>
				</div>
				<div className="icon twitter">
					<p>Twitter</p>
					<span><i className="fab fa-twitter"></i></span>
				</div>
				<div className="icon messenger">
					<p>Messenger</p>
					<span><i className="fab fa-facebook-messenger"></i></span>
				</div>
				<div className="icon mail">
					<p>Mail</p>
					<span><i className="fas fa-envelope"></i></span>
				</div>
			</div>
			<div className="social-modal-close" onClick={() => setShowSocialModal(prev => !prev)}>
				<i className="fas fa-times"></i>
			</div>
		</div>
	)
}

export default SocialModal;