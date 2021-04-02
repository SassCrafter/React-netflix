import React from 'react'
import OptForm from '../components/opt-form/'

function optformContainer() {
	return (
		<OptForm>
			<OptForm.Title>Ready to watch? Enter your email to create or restart your membership.</OptForm.Title>
			<OptForm.Form>
				<OptForm.Group>
					<OptForm.Input placeholder='Email Address'/>
					<OptForm.Button>Try 30 Days Free <OptForm.Icon src='/images/icons/chevron-right.png' /></OptForm.Button>
				</OptForm.Group>
			</OptForm.Form>
		</OptForm>
	)
}

export default optformContainer