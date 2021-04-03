import React from 'react'
import Feature from '../components/feature'
import OptForm from '../components/opt-form/'
import HeaderContainer from '../containers/header'
import Jumbotron from '../containers/jumbotron'
import Footer from '../containers/footer'
import Accordion from '../containers/accordion'

function Home() {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
					<Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
				</Feature>
				<OptForm>
					<OptForm.Title>Ready to watch? Enter your email to create or restart your membership.</OptForm.Title>
					<OptForm.Form>
						<OptForm.Group>
							<OptForm.Input placeholder='Email Address'/>
							<OptForm.Button>Try 30 Days Free <OptForm.Icon src='/images/icons/chevron-right.png' /></OptForm.Button>
						</OptForm.Group>
					</OptForm.Form>
					<OptForm.Subtitle>Only new members are eligible for this offer.</OptForm.Subtitle>
				</OptForm>
			</HeaderContainer>
			<Jumbotron />
			<Accordion />
			<Footer />	
		</>
	)
}

export default Home