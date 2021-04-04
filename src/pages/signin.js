import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import Form from '../components/form'
import * as Routes from '../constants/routes'

function Signin() {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');


	const signinHandler = (e) => {
		e.preventDefault();

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				// Push to the browser page
				history.push(Routes.BROWSE);
			})
			.catch((error) => {
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
				<Form onSubmit={signinHandler} method='POST'>
					<Form.Title>Sign In</Form.Title>
					<Form.FormEl>
						{error && <Form.Error>{error}</Form.Error>}
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
						 <Form.Text>New to Netflix? <Form.Link to={Routes.SIGN_UP}>Sign up Now</Form.Link></Form.Text>
						 <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.TextSmall>
						}
					</Form.FormEl>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	)
}

export default Signin