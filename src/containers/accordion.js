import React from 'react'
import Accordion from '../components/accordion/'
import OptForm from '../containers/optform-container'
import faqsData from '../fixtures/faqs.json'

function accordion() {
	return (
		<div>
			<Accordion>
				<Accordion.Title>Frequently Asked Questions</Accordion.Title>
				{faqsData.map((item) => (
					<Accordion.Item key={item.id}>
						<Accordion.Header>{item.header}</Accordion.Header>
						<Accordion.Body>{item.body}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
			<OptForm />
		</div>
	)
}

export default accordion