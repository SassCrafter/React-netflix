import React from 'react'
import HeaderContainer from '../containers/header'
import FooterContainer from '../containers/footer'
import Form from '../components/form'


function Signin() {
	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					<Form.FormEl>
						<Form.Error>Error</Form.Error>
						<Form.Input 
							placeholder="Email or phone number"
						 />
						 <Form.Input 
						 	type='password'
						 	autoComplete='off'
							placeholder="Password"
						 />
						 <Form.Submit type='submit'>
						 	Sign In
						 </Form.Submit>
						 <Form.Text>This page is protected by Google reCAPTCHA to ensure you're not a bot.</Form.Text>
					</Form.FormEl>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	)
}

export default Signin