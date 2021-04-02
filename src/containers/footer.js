import Footer from '../components/footer/'
import React from 'react'

function footer() {
	return (
		<Footer>
			<Footer.Row>
				<Footer.Link href='#'>
					<Footer.Title>Questions? Contact Us</Footer.Title>
				</Footer.Link>
			</Footer.Row>
			<Footer.Break />
			<Footer.Row>
				<Footer.Col>
					<Footer.Link href='#'>FAQ</Footer.Link>
					<Footer.Link href='#'>Investor Relations</Footer.Link>
					<Footer.Link href='#'>Privace</Footer.Link>
					<Footer.Link href='#'>Speed Test</Footer.Link>
				</Footer.Col>
				<Footer.Col>
					<Footer.Link href='#'>Help Center</Footer.Link>
					<Footer.Link href='#'>Jobs</Footer.Link>
					<Footer.Link href='#'>Cookie Preferences</Footer.Link>
					<Footer.Link href='#'>Legal Notices</Footer.Link>
				</Footer.Col>
				<Footer.Col>
					<Footer.Link href='#'>Account</Footer.Link>
					<Footer.Link href='#'>Ways to Watch</Footer.Link>
					<Footer.Link href='#'>Corporate Information</Footer.Link>
					<Footer.Link href='#'>Netflix Originals</Footer.Link>
				</Footer.Col>
				<Footer.Col>
					<Footer.Link href='#'>Media Center</Footer.Link>
					<Footer.Link href='#'>Terms of Use</Footer.Link>
					<Footer.Link href='#'>Contact us</Footer.Link>
				</Footer.Col>
			</Footer.Row>
			<Footer.Break />
			<Footer.Title>Netflix Ukraine</Footer.Title>
		</Footer>
	)
}

export default footer