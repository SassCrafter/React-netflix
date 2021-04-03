import React from 'react'
import Header from '../components/header/'
function HeaderContainer() {
	return (
		<div>
			<Header>
				<Header.Frame>
					<Header.Logo src='/images' />
					<Header.Button>Sign In</Header.Button>
				</Header.Frame>
			</Header>
		</div>
	)
}

export default HeaderContainer