import React from 'react'
import HeaderContainer from '../containers/header'
import Jumbotron from '../containers/jumbotron'
import Footer from '../containers/footer'
import Accordion from '../containers/accordion'

function Home() {
	return (
		<>
			<HeaderContainer />
			<Jumbotron />
			<Accordion />
			<Footer />	
		</>
	)
}

export default Home