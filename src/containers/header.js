import React from 'react'
import Header from '../components/header/'
import * as Routes from '../constants/routes'
import Logo from '../logo.svg'

function HeaderContainer({ children, buttonLinkIsVisible=true }) {
	return (
		<Header.Container>
			<Header>
				<Header.Relative>
					<Header.Frame>
						<Header.Logo to={Routes.HOME} src={Logo} alt='Netflix' />
						<Header.ButtonLink buttonLinkIsVisible={buttonLinkIsVisible} to={Routes.SIGN_IN}>Sign In</Header.ButtonLink>
					</Header.Frame>
					<Header.Center>
						{children}
					</Header.Center>
				</Header.Relative>
			</Header>
		</Header.Container>
	)
}

export default HeaderContainer