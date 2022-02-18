// import {useEffect} from 'react'
// import {useHistory} from 'react-router-dom'

//importing css file
import './Profile.css'

const Profile = () => {
	// const history = useHistory()

	// const callProfilePage = async () => {

	// 	try{
	// 		const res = await fetch('/profile', {
	// 			method: 'GET',
	// 			header: {
	// 				Accept: 'application/json',
	// 				'Content-Type': 'application/json'
	// 			},
	// 			credentials: 'include'
	// 		})

	// 		const data = res.json();

	// 		console.log(data)
	// 	}
	// 	catch(err){
	// 		history.push('/login')
	// 	}
	// }

	// useEffect(() => {
	// 	callProfilePage();
	// }, []);

	return(
		<section>
			<h1>Profile</h1>
			<p></p>
			<p></p>
			<p></p>
		</section>
	)
}

export default Profile