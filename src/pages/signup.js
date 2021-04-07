import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import Form from '../components/form'
import * as Routes from '../constants/routes'

function Signup() {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');


	const signupHandler = (e) => {
		e.preventDefault();

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((result) => 
				result.user.updateProfile({
					displayName: name,
					photoUrl: Math.floor(Math.random() * 5) + 1,
				}).then(() => {
					history.push(Routes.BROWSE);
				})
			)
			.catch((error) => {
				setName('');
				setEmail('');
				setPassword('');
				setError(error.message);
			})
	}

	const isInvalid = password === '' || email === '';

	// Check if valid
	return (
		<>
			<HeaderContainer buttonLinkIsVisible={false}>
				<Form onSubmit={signupHandler} method='POST'>
					<Form.Title>Sign Up</Form.Title>
					<Form.FormEl>
						{error && <Form.Error>{error}</Form.Error>}
						<Form.Input 
							value={name}
							onChange={({ target }) => setName(target.value)}
							placeholder="First Name"
						 />
						<Form.Input 
							value={email}
							onChange={({ target }) => setEmail(target.value)}
							placeholder="Email or phone number"
						 />
						 <Form.Input 
						 	value={password}
							onChange={({ target }) => setPassword(target.value)}
						 	type='password'
						 	autoComplete='off'
							placeholder="Password"
						 />
						 <Form.Submit disabled={isInvalid}
						  type='submit'>
						 	Sign In
						 </Form.Submit>
						 <Form.Text>Already a user? <Form.Link to={Routes.SIGN_IN}>Sign In</Form.Link></Form.Text>
						 <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.TextSmall>
					</Form.FormEl>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	)
}

export default Signup